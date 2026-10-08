export function buildSchoolReminders({people,daySchedule,override,displayName,preferences,now=new Date(),days=90,isPickedUp=()=>false}){
 const jobs=[];if(!preferences.notifications)return jobs;
 const minute=t=>{const [h,m]=t.split(':').map(Number);return h*60+m};
 const quiet=date=>{const a=minute(preferences.quietStart||'21:00'),b=minute(preferences.quietEnd||'06:00'),n=date.getHours()*60+date.getMinutes();return a===b?false:a<b?n>=a&&n<b:n>=a||n<b};
 for(let offset=0;offset<days;offset++){const date=new Date(now);date.setHours(12,0,0,0);date.setDate(date.getDate()+offset);const key=`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
  for(const child of people){const schedule=daySchedule(child.id,date),change=override(child.id,date),rows=(schedule.rows||[]).filter(row=>!/playcv|after.school/i.test(row[0]));if(change?.noSchool||!rows.length||isPickedUp(child.id,date))continue;
   const arrival=change?.arrival||rows[0][1],pickup=change?.pickup||rows.at(-1)[2];
   for(const [kind,time,enabled] of [['leave',arrival,preferences.departureAlerts],['pickup',pickup,preferences.pickupAlerts]]){if(!enabled||!/^\d{2}:\d{2}$/.test(time||''))continue;const target=new Date(`${key}T${time}:00`);if(kind==='leave')target.setMinutes(target.getMinutes()-15);const due=new Date(target.getTime()-600000);if(due<=now||quiet(due))continue;const name=displayName(child).split(' ')[0];const clock=target.toLocaleTimeString(undefined,{hour:'numeric',minute:'2-digit'});jobs.push({id:`${child.id}|${key}|${kind}|${target.getTime()}`,dueAt:due.getTime(),targetAt:target.getTime(),title:kind==='leave'?`Leave for ${name} in 10 minutes`:`Pick up ${name} in 10 minutes`,body:kind==='leave'?`Leave by ${clock}.`:`School pickup is at ${clock}.`,date:key,kind});}
  }
 }
 return jobs;
}
