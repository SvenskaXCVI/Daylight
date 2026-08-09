/* Generated from the desktop Daylight source of truth. */
const COLORS=["#ff5cb8","#5146ff","#b500f5"];
const defaults = {
  people: [
    { id: "kacey", name: "Kacey DeMiguel", subtitle: "Creekside Middle School · 6th Grade", color: COLORS[0] },
    { id: "kaelyn", name: "Kaelyn DeMiguel", subtitle: "Castro Valley High School · 10th Grade", color: COLORS[1] },
    { id: "kenzie", name: "Kenzie DeMiguel", subtitle: "Proctor Elementary School · 4th Grade", color: COLORS[2] }
  ],
  feeds: [],
  customPortals: [],
  hiddenPortals: [],
  theme: "light",
  preferences: {
    accent:"#344e43",
    density:"comfortable",
    clockFormat:"12",
    weekStart:1,
    showWeekends:true,
    reduceMotion:false,
    notifications:false
    ,notificationSounds:true
    ,notificationSoundProfile:"gentle"
    ,notificationVolume:60
    ,notificationDesktop:true
    ,notificationScreensaver:true
    ,notifySchool:true
    ,notifyEvents:true
    ,notifyTasks:true
    ,notifyMedication:true
    ,notifySystem:true
    ,quietHoursEnabled:false
    ,quietHoursStart:"21:00"
    ,quietHoursEnd:"06:30"
    ,todoDigestTime:"08:00"
    ,familyName:"The DeMiguel family"
    ,parentCalendarName:"Parents"
    ,sidebarCollapsed:false
    ,glassOpacity:72
    ,glassPreset:"balanced"
    ,glassBlur:24
    ,backgroundDim:10
    ,sidebarOpacity:82
    ,cardOpacity:72
    ,modalOpacity:88
    ,unifiedGlass:false
    ,adaptiveContrast:true
    ,backgroundIntelligence:true
    ,edgeLighting:true
    ,refraction:true
    ,ambientBlend:true
    ,tactileButtons:true
    ,depthMotion:true
    ,reduceBorders:false
    ,studentGlass:true
    ,maxReadability:false
    ,textScale:"1"
    ,colorVision:"full"
    ,enhancedContrast:false
    ,readingFont:false
    ,largeTargets:false
    ,strongFocus:true
    ,simplifiedMotion:false
    ,statusLabels:true
    ,screenReader:true
    ,background:"aurora-mist"
    ,backgroundType:"static"
    ,liveWeatherMode:"auto"
    ,liveTimeMode:"auto"
    ,styleProfile:"calm"
    ,layoutMode:"calm"
    ,backgroundFocus:"soft"
    ,autoEveningTheme:false
    ,compactScheduleTimes:true
    ,muteCompletedPeriods:true
    ,autoScrollActive:true
    ,calendarDensity:"comfortable"
    ,preservePageScroll:true
    ,scheduleCardOrder:["kacey","kaelyn","kenzie"]
    ,weatherLocation:"Castro Valley, CA"
    ,googleWeatherApiKey:""
  },
  routeSettings:{
    origin:{address:"",formattedAddress:"",placeId:"",verified:false},
    stops:[
      {id:"kacey",label:"Kacey",school:"Creekside Middle School",address:"",formattedAddress:"",placeId:"",verified:false},
      {id:"kaelyn",label:"Kaelyn",school:"Castro Valley High School",address:"",formattedAddress:"",placeId:"",verified:false},
      {id:"kenzie",label:"Kenzie",school:"Proctor Elementary School",address:"",formattedAddress:"",placeId:"",verified:false}
    ],
    refreshMinutes:15,returnHome:false,mapTheme:"auto"
  },
  syncSettings:{endpoint:"wss://daylight-sync-relay.onrender.com",pairingCode:"",deviceId:""},
  bellSchedules: {
    kacey: {
      1: [
        ["0 Period","07:20","08:10"],["1st period","08:15","09:05"],["2nd period","09:09","09:59"],
        ["Nutrition","09:59","10:09"],["Advisory","10:13","10:33"],["3rd period","10:33","11:23"],
        ["4th period","11:27","12:17"],["Lunch","12:17","12:52"],["5th period","12:56","13:46"],["6th period","13:50","14:40"]
      ],
      2: [
        ["0 Period","07:20","08:08"],["1st period","08:15","09:03"],["2nd period","09:07","09:55"],
        ["Nutrition","09:55","10:05"],["Tutorial","10:09","10:39"],["3rd period","10:43","11:31"],
        ["4th period","11:35","12:23"],["Lunch","12:23","12:56"],["5th period","13:00","13:48"],["6th period","13:52","14:40"]
      ],
      3: [
        ["0 Period","07:20","08:00"],["1st period","09:15","09:55"],["2nd period","09:59","10:39"],
        ["Nutrition","10:39","10:49"],["Advisory","10:53","11:13"],["3rd period","11:13","11:53"],
        ["4th period","11:57","12:37"],["Lunch","12:37","13:12"],["5th period","13:16","13:56"],["6th period","14:00","14:40"]
      ],
      4: [
        ["0 Period","07:20","08:08"],["1st period","08:15","09:03"],["2nd period","09:07","09:55"],
        ["Nutrition","09:55","10:05"],["Tutorial","10:09","10:39"],["3rd period","10:43","11:31"],
        ["4th period","11:35","12:23"],["Lunch","12:23","12:56"],["5th period","13:00","13:48"],["6th period","13:52","14:40"]
      ],
      5: [
        ["0 Period","07:20","08:10"],["1st period","08:15","09:05"],["2nd period","09:09","09:59"],
        ["Nutrition","09:59","10:09"],["Advisory","10:13","10:33"],["3rd period","10:33","11:23"],
        ["4th period","11:27","12:17"],["Lunch","12:17","12:52"],["5th period","12:56","13:46"],["6th period","13:50","14:40"]
      ]
    },
    kaelyn: {
      1: [
        ["Period 0","07:24","08:24"],["Period 1","08:30","09:27"],["Period 2","09:33","10:30"],
        ["Break","10:30","10:45"],["Period 3","10:51","11:48"],["Period 4 (Announcements)","11:54","12:54"],
        ["Lunch","12:54","13:29"],["Period 5","13:35","14:32"],["Period 6","14:38","15:35"]
      ],
      2: [
        ["Period 0","07:54","08:24"],["Period 1","08:30","10:10"],["Trojan Time","10:16","10:58"],
        ["Break","10:58","11:13"],["Period 3","11:19","12:59"],["Lunch","12:59","13:34"],
        ["Period 5","13:40","15:20"]
      ],
      3: [
        ["Period 0","07:24","08:24"],["Period 2","08:30","10:10"],["Trojan Time","10:16","10:58"],
        ["Break","10:58","11:13"],["Period 4","11:19","12:59"],["Lunch","12:59","13:34"],
        ["Period 6","13:40","15:20"]
      ],
      4: [
        ["Period 0","07:24","08:24"],["Period 1","08:30","09:27"],["Period 2","09:33","10:30"],
        ["Break","10:30","10:45"],["Period 3","10:51","11:48"],["Period 4 (Announcements)","11:54","12:54"],
        ["Lunch","12:54","13:29"],["Period 5","13:35","14:32"],["Period 6","14:38","15:35"]
      ],
      5: [
        ["Period 0","07:24","08:24"],["Period 1","08:30","09:27"],["Period 2","09:33","10:30"],
        ["Break","10:30","10:45"],["Period 3","10:51","11:48"],["Period 4 (Announcements)","11:54","12:54"],
        ["Lunch","12:54","13:29"],["Period 5","13:35","14:32"],["Period 6","14:38","15:35"]
      ]
    },
    kenzie: {
      1: [
        ["Instruction","08:10","10:00"],["Recess","10:00","10:18"],["Instruction","10:18","12:25"],
        ["Lunch","12:25","13:04"],["Instruction","13:04","14:35"]
      ],
      2: [
        ["Instruction","08:10","10:00"],["Recess","10:00","10:18"],["Instruction","10:18","12:25"],
        ["Lunch","12:25","13:04"],["Instruction","13:04","14:35"]
      ],
      3: [
        ["Instruction","08:10","10:00"],["Recess","10:00","10:18"],["Instruction","10:18","12:25"],
        ["Lunch","12:25","13:04"],["Instruction","13:04","14:35"]
      ],
      4: [
        ["Instruction","08:10","10:00"],["Recess","10:00","10:18"],["Instruction","10:18","12:25"],
        ["Lunch","12:25","13:04"],["Instruction","13:04","14:35"]
      ],
      5: [
        ["Instruction","08:10","10:00"],["Recess","10:00","10:18"],["Instruction","10:18","12:25"],
        ["Lunch","12:25","13:04"],["Instruction","13:04","13:40"]
      ]
    }
  },
  specialBellSchedules: {
    kacey: {
      "2026-08-21":{name:"Early Release Advisory Day",rows:[["0 Period","07:20","08:00"],["1st period","08:15","08:56"],["2nd period","09:00","09:41"],["Nutrition","09:41","09:51"],["Advisory","09:55","10:20"],["3rd period","10:20","11:01"],["4th period","11:05","11:46"],["Lunch","11:46","12:16"],["5th period","12:20","13:00"],["6th period","13:04","13:44"]]},
      "2027-03-19":{name:"Early Release Advisory Day",rows:[["0 Period","07:20","08:00"],["1st period","08:15","08:56"],["2nd period","09:00","09:41"],["Nutrition","09:41","09:51"],["Advisory","09:55","10:20"],["3rd period","10:20","11:01"],["4th period","11:05","11:46"],["Lunch","11:46","12:16"],["5th period","12:20","13:00"],["6th period","13:04","13:44"]]},
      "2026-10-06":{name:"Early Release Tutorial Day",rows:[["0 Period","07:20","07:58"],["1st period","08:15","08:53"],["2nd period","08:57","09:35"],["Nutrition","09:35","09:45"],["Tutorial","09:49","10:19"],["3rd period","10:23","11:01"],["4th period","11:05","11:43"],["Lunch","11:43","12:16"],["5th period","12:20","12:58"],["6th period","13:02","13:40"]]},
      "2026-10-08":{name:"Early Release Tutorial Day",rows:[["0 Period","07:20","07:58"],["1st period","08:15","08:53"],["2nd period","08:57","09:35"],["Nutrition","09:35","09:45"],["Tutorial","09:49","10:19"],["3rd period","10:23","11:01"],["4th period","11:05","11:43"],["Lunch","11:43","12:16"],["5th period","12:20","12:58"],["6th period","13:02","13:40"]]},
      "2026-10-27":{name:"Early Release Tutorial Day",rows:[["0 Period","07:20","07:58"],["1st period","08:15","08:53"],["2nd period","08:57","09:35"],["Nutrition","09:35","09:45"],["Tutorial","09:49","10:19"],["3rd period","10:23","11:01"],["4th period","11:05","11:43"],["Lunch","11:43","12:16"],["5th period","12:20","12:58"],["6th period","13:02","13:40"]]},
      "2027-02-23":{name:"Early Release Tutorial Day",rows:[["0 Period","07:20","07:58"],["1st period","08:15","08:53"],["2nd period","08:57","09:35"],["Nutrition","09:35","09:45"],["Tutorial","09:49","10:19"],["3rd period","10:23","11:01"],["4th period","11:05","11:43"],["Lunch","11:43","12:16"],["5th period","12:20","12:58"],["6th period","13:02","13:40"]]},
      "2027-03-18":{name:"Early Release Tutorial Day",rows:[["0 Period","07:20","07:58"],["1st period","08:15","08:53"],["2nd period","08:57","09:35"],["Nutrition","09:35","09:45"],["Tutorial","09:49","10:19"],["3rd period","10:23","11:01"],["4th period","11:05","11:43"],["Lunch","11:43","12:16"],["5th period","12:20","12:58"],["6th period","13:02","13:40"]]},
      "2026-08-05":{name:"Minimum Day Schedule",rows:[["0 Period","07:20","07:53"],["1st period","08:15","08:48"],["2nd period","08:52","09:25"],["3rd period","09:29","10:02"],["4th period","10:06","10:39"],["Extended Nutrition","10:39","10:59"],["5th period","11:03","11:36"],["6th period","11:40","12:13"]]},
      "2026-11-20":{name:"Minimum Day Schedule",rows:[["0 Period","07:20","07:53"],["1st period","08:15","08:48"],["2nd period","08:52","09:25"],["3rd period","09:29","10:02"],["4th period","10:06","10:39"],["Extended Nutrition","10:39","10:59"],["5th period","11:03","11:36"],["6th period","11:40","12:13"]]},
      "2026-12-17":{name:"Minimum Day Schedule",rows:[["0 Period","07:20","07:53"],["1st period","08:15","08:48"],["2nd period","08:52","09:25"],["3rd period","09:29","10:02"],["4th period","10:06","10:39"],["Extended Nutrition","10:39","10:59"],["5th period","11:03","11:36"],["6th period","11:40","12:13"]]},
      "2026-12-18":{name:"Minimum Day Schedule",rows:[["0 Period","07:20","07:53"],["1st period","08:15","08:48"],["2nd period","08:52","09:25"],["3rd period","09:29","10:02"],["4th period","10:06","10:39"],["Extended Nutrition","10:39","10:59"],["5th period","11:03","11:36"],["6th period","11:40","12:13"]]},
      "2027-03-26":{name:"Minimum Day Schedule",rows:[["0 Period","07:20","07:53"],["1st period","08:15","08:48"],["2nd period","08:52","09:25"],["3rd period","09:29","10:02"],["4th period","10:06","10:39"],["Extended Nutrition","10:39","10:59"],["5th period","11:03","11:36"],["6th period","11:40","12:13"]]},
      "2027-05-26":{name:"Minimum Day Schedule",rows:[["0 Period","07:20","07:53"],["1st period","08:15","08:48"],["2nd period","08:52","09:25"],["3rd period","09:29","10:02"],["4th period","10:06","10:39"],["Extended Nutrition","10:39","10:59"],["5th period","11:03","11:36"],["6th period","11:40","12:13"]]},
      "2027-05-27":{name:"Minimum Day Schedule",rows:[["0 Period","07:20","07:53"],["1st period","08:15","08:48"],["2nd period","08:52","09:25"],["3rd period","09:29","10:02"],["4th period","10:06","10:39"],["Extended Nutrition","10:39","10:59"],["5th period","11:03","11:36"],["6th period","11:40","12:13"]]},
      "2027-05-28":{name:"Minimum Day Schedule",rows:[["0 Period","07:20","07:53"],["1st period","08:15","08:48"],["2nd period","08:52","09:25"],["3rd period","09:29","10:02"],["4th period","10:06","10:39"],["Extended Nutrition","10:39","10:59"],["5th period","11:03","11:36"],["6th period","11:40","12:13"]]}
    },
    kaelyn: {
      "2026-08-05":{name:"Modified Regular Schedule",rows:[["Period 0","07:38","08:24"],["Period 1","08:30","09:16"],["Period 2","09:22","10:08"],["Break","10:08","10:23"],["Period 3","10:29","11:15"],["Period 4","11:21","12:11"],["Lunch","12:11","12:46"],["Period 5","12:52","13:38"],["Period 6","13:44","14:30"]]},
      "2026-08-28":{name:"Modified Regular Schedule",rows:[["Period 0","07:38","08:24"],["Period 1","08:30","09:16"],["Period 2","09:22","10:08"],["Break","10:08","10:23"],["Period 3","10:29","11:15"],["Period 4","11:21","12:11"],["Lunch","12:11","12:46"],["Period 5","12:52","13:38"],["Period 6","13:44","14:30"]]},
      "2026-10-05":{name:"Modified Regular Schedule",rows:[["Period 0","07:38","08:24"],["Period 1","08:30","09:16"],["Period 2","09:22","10:08"],["Break","10:08","10:23"],["Period 3","10:29","11:15"],["Period 4","11:21","12:11"],["Lunch","12:11","12:46"],["Period 5","12:52","13:38"],["Period 6","13:44","14:30"]]},
      "2026-10-08":{name:"Modified Regular Schedule",rows:[["Period 0","07:38","08:24"],["Period 1","08:30","09:16"],["Period 2","09:22","10:08"],["Break","10:08","10:23"],["Period 3","10:29","11:15"],["Period 4","11:21","12:11"],["Lunch","12:11","12:46"],["Period 5","12:52","13:38"],["Period 6","13:44","14:30"]]},
      "2027-01-05":{name:"Modified Regular Schedule",rows:[["Period 0","07:38","08:24"],["Period 1","08:30","09:16"],["Period 2","09:22","10:08"],["Break","10:08","10:23"],["Period 3","10:29","11:15"],["Period 4","11:21","12:11"],["Lunch","12:11","12:46"],["Period 5","12:52","13:38"],["Period 6","13:44","14:30"]]},
      "2027-03-18":{name:"Modified Regular Schedule",rows:[["Period 0","07:38","08:24"],["Period 1","08:30","09:16"],["Period 2","09:22","10:08"],["Break","10:08","10:23"],["Period 3","10:29","11:15"],["Period 4","11:21","12:11"],["Lunch","12:11","12:46"],["Period 5","12:52","13:38"],["Period 6","13:44","14:30"]]},
      "2027-03-19":{name:"Modified Regular Schedule",rows:[["Period 0","07:38","08:24"],["Period 1","08:30","09:16"],["Period 2","09:22","10:08"],["Break","10:08","10:23"],["Period 3","10:29","11:15"],["Period 4","11:21","12:11"],["Lunch","12:11","12:46"],["Period 5","12:52","13:38"],["Period 6","13:44","14:30"]]},
      "2026-08-14":{name:"Welcome Back Assembly",rows:[["Period 0","07:38","08:24"],["Period 1","08:30","09:16"],["Period 2","09:22","10:08"],["Break","10:08","10:23"],["Period 3","10:29","11:15"],["Period 4 Assembly","11:21","12:21"],["Period 4 Class Time","12:21","13:07"],["Lunch","13:07","13:42"],["Period 5","13:48","14:34"],["Period 6","14:40","15:26"]]},
      "2026-08-20":{name:"Fire Drill Bell Schedule",rows:[["Period 0","07:34","08:24"],["Period 1","08:30","09:25"],["Period 2","09:31","10:26"],["Break","10:26","10:41"],["Period 3","10:47","11:42"],["Period 3 Drill","11:42","11:57"],["Period 4","12:03","12:58"],["Lunch","12:58","13:33"],["Period 5","13:39","14:34"],["Period 6","14:40","15:35"]]},
      "2026-09-18":{name:"Homecoming Day · 12:21 Dismissal",rows:[["Period 0","07:53","08:24"],["Period 1","08:30","09:01"],["Period 2","09:07","09:38"],["Period 3","09:44","10:15"],["Lunch Break","10:15","10:30"],["Period 4","10:36","11:07"],["Period 5","11:13","11:44"],["Period 6","11:50","12:21"]]},
      "2026-10-06":{name:"Pre-PSAT",rows:[["Period 0","07:55","08:58"],["Period 1","09:04","10:07"],["Break","10:07","10:22"],["Period 2","10:28","11:31"],["Pre-PSAT","11:37","12:07"],["Lunch","12:07","12:42"],["Period 3","12:48","13:51"],["Period 4","13:57","15:00"]]},
      "2026-10-07":{name:"PSAT Test Day · 10th Grade",rows:[["PSAT Testing","08:30","11:52"],["Lunch","11:52","12:27"],["Period 5","12:33","13:36"],["Break","13:36","13:51"],["Period 6","13:57","15:00"]]},
      "2026-10-15":{name:"Great ShakeOut Earthquake Drill",rows:[["Period 0","07:34","08:24"],["Period 1","08:30","09:20"],["Period 2","09:26","10:16"],["Break","10:16","10:31"],["Period 3 Drill","10:37","11:22"],["Period 3","11:22","12:12"],["Period 4","12:18","13:08"],["Lunch","13:08","13:43"],["Period 5","13:49","14:39"],["Period 6","14:45","15:35"]]},
      "2026-12-16":{name:"1st Semester Finals · Day 1",rows:[["Period 1 Final","08:30","10:30"],["Brunch","10:30","11:05"],["Period 2 Final","11:11","13:11"],["Break","13:11","13:26"],["Period 0 Final","13:32","15:32"]]},
      "2026-12-17":{name:"1st Semester Finals · Day 2",rows:[["Period 3 Final","08:30","10:30"],["Brunch","10:30","11:05"],["Period 4 Final","11:11","13:11"],["Break","13:11","13:26"],["Make Up Final by Appointment","13:32","15:32"]]},
      "2026-12-18":{name:"1st Semester Finals · Day 3",rows:[["Period 5 Final","08:30","10:30"],["Brunch","10:30","11:05"],["Period 6 Final","11:11","13:11"],["Break","13:11","13:26"],["Make-up Final (by Appt)","13:32","15:32"]]},
      "2027-01-21":{name:"ALICE Drill",rows:[["Period 0","07:34","08:24"],["Period 1","08:30","09:20"],["Period 2","09:26","10:16"],["Break","10:16","10:31"],["Period 3 Drill","10:37","11:22"],["Period 3","11:22","12:12"],["Period 4","12:18","13:08"],["Lunch","13:08","13:43"],["Period 5","13:49","14:39"],["Period 6","14:45","15:35"]]},
      "2027-04-13":{name:"SBAC Schedule",rows:[["Period 0","07:27","08:24"],["Period 1/2","08:30","10:28"],["Break","10:28","10:43"],["Period 3/4","10:49","12:47"],["Lunch","12:47","13:22"],["Period 5/6","13:28","15:26"]]},
      "2027-04-14":{name:"SBAC Schedule",rows:[["Period 0","07:27","08:24"],["Period 1/2","08:30","10:28"],["Break","10:28","10:43"],["Period 3/4","10:49","12:47"],["Lunch","12:47","13:22"],["Period 5/6","13:28","15:26"]]},
      "2027-04-20":{name:"SBAC Schedule",rows:[["Period 0","07:27","08:24"],["Period 1/2","08:30","10:28"],["Break","10:28","10:43"],["Period 3/4","10:49","12:47"],["Lunch","12:47","13:22"],["Period 5/6","13:28","15:26"]]},
      "2027-04-21":{name:"SBAC Schedule",rows:[["Period 0","07:27","08:24"],["Period 1/2","08:30","10:28"],["Break","10:28","10:43"],["Period 3/4","10:49","12:47"],["Lunch","12:47","13:22"],["Period 5/6","13:28","15:26"]]},
      "2027-05-17":{name:"Farewell / Academic Pep Rally",rows:[["Period 0","07:38","08:24"],["Period 1","08:30","09:16"],["Period 2","09:22","10:08"],["Break","10:08","10:23"],["Period 3","10:29","11:15"],["Period 4 Assembly","11:21","12:21"],["Period 4 Class Time","12:21","13:07"],["Lunch","13:07","13:42"],["Period 5","13:48","14:34"],["Period 6","14:40","15:26"]]},
      "2027-05-25":{name:"2nd Semester Finals · Day 1",rows:[["Period 1 Final","08:30","10:30"],["Brunch","10:30","11:05"],["Period 2 Final","11:11","13:11"],["Break","13:11","13:26"],["Period 0 Final","13:32","15:32"]]},
      "2027-05-26":{name:"2nd Semester Finals · Day 2",rows:[["Period 3 Final","08:30","10:30"],["Brunch","10:30","11:05"],["Period 4 Final","11:11","13:11"],["Break","13:11","13:26"],["Make-up Final (by Appointment Only)","13:32","15:32"]]},
      "2027-05-27":{name:"2nd Semester Finals · Day 3",rows:[["Period 5 Final","08:30","10:30"],["Brunch","10:30","11:05"],["Period 6 Final","11:11","13:11"],["Break","13:11","13:26"],["Make-up Final (by Appt)","13:32","15:32"]]},
      "2027-05-28":{name:"Graduation Day · 12:21 Dismissal · Ceremony 4:00 PM",rows:[["Period 0","07:53","08:24"],["Period 1","08:30","09:01"],["Period 2","09:07","09:38"],["Period 3","09:44","10:15"],["Lunch Break","10:15","10:30"],["Period 4","10:36","11:07"],["Period 5","11:13","11:44"],["Period 6","11:50","12:21"]]}
    }
  },
  scheduleOverrides: [
    {id:"kaelyn-2026-08-05",owner:"kaelyn",from:"2026-08-05",to:"2026-08-05",arrival:"07:38",pickup:"14:30",note:"Wednesday-only transition schedule"},
    {id:"kacey-2026-08-05",owner:"kacey",from:"2026-08-05",to:"2026-08-05",arrival:"07:20",pickup:"12:13",note:"Early pickup"},
    {id:"kacey-2026-08-06-07",owner:"kacey",from:"2026-08-06",to:"2026-08-07",weekdays:[4,5],arrival:"07:20",pickup:"14:40",note:"Temporary transportation schedule"},
    {id:"kenzie-2026-08-05-17",owner:"kenzie",from:"2026-08-05",to:"2026-08-17",weekdays:[1,2,3,4,5],arrival:"08:10",pickup:"13:35",pickupEnd:"13:40",note:"Temporary early-pickup window"}
  ],
  customEvents: [],
  medications: [],
  todoItems: [],
  groceryItems: [],
  suggestionDismissals: [],
  notificationHistory: [],
  importantEventKeys: []
};
window.DAYLIGHT_SEED=defaults;
