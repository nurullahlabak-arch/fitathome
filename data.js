// ============================================
// FITATHOME — DATA
// ============================================

const WORKOUTS = [
  { id:0, name:'Full Body Blast', icon:'🏋️', category:'fullbody', difficulty:'beginner', duration:25, calories:220, equipment:'None', description:'A complete full-body workout using only your bodyweight. Perfect for all levels.',
    exercises:[
      {name:'Jumping Jacks', icon:'⭐', type:'timed', duration:40, instruction:'Stand with feet together, jump and spread arms and legs wide, then return.'},
      {name:'Push Ups', icon:'💪', type:'reps', reps:12, instruction:'Keep your body straight, lower chest to floor, push back up.'},
      {name:'Bodyweight Squats', icon:'🦵', type:'reps', reps:15, instruction:'Feet shoulder-width apart, lower down until thighs are parallel, drive up.'},
      {name:'Mountain Climbers', icon:'🏔️', type:'timed', duration:30, instruction:'In plank position, drive knees alternately toward chest quickly.'},
      {name:'Lunges', icon:'🚶', type:'reps', reps:10, instruction:'Step forward, lower back knee toward floor, return and alternate.'},
      {name:'Plank Hold', icon:'🤸', type:'timed', duration:30, instruction:'Hold a straight body position on forearms and toes. Core tight.'},
      {name:'High Knees', icon:'🏃', type:'timed', duration:30, instruction:'Run in place bringing knees up to hip height. Keep a fast pace.'},
      {name:'Burpees', icon:'💥', type:'reps', reps:8, instruction:'Drop to plank, do a push-up, jump feet in, jump up with arms overhead.'}
    ]},
  { id:1, name:'Core Crusher', icon:'🎯', category:'abs', difficulty:'intermediate', duration:20, calories:180, equipment:'None', description:'Intense core-focused workout that targets abs, obliques and lower back.',
    exercises:[
      {name:'Crunches', icon:'🎯', type:'reps', reps:20, instruction:'Lie on back, hands behind head, curl shoulders toward knees.'},
      {name:'Bicycle Crunches', icon:'🚲', type:'reps', reps:20, instruction:'Alternate bringing opposite knee and elbow together in a cycling motion.'},
      {name:'Leg Raises', icon:'🦵', type:'reps', reps:12, instruction:'Lie flat, keep legs straight and raise them to 90 degrees, lower slowly.'},
      {name:'Russian Twists', icon:'🔄', type:'reps', reps:20, instruction:'Sit with knees bent, lean back slightly and rotate torso side to side.'},
      {name:'Plank', icon:'🤸', type:'timed', duration:45, instruction:'Hold forearm plank. Keep hips level, breathe steadily.'},
      {name:'Flutter Kicks', icon:'🦋', type:'timed', duration:30, instruction:'Lie on back, raise legs 6 inches and alternate small up-down kicks.'}
    ]},
  { id:2, name:'Cardio Burn', icon:'🔥', category:'cardio', difficulty:'intermediate', duration:30, calories:320, equipment:'None', description:'High-intensity cardio session to torch calories and boost fitness.',
    exercises:[
      {name:'Burpees', icon:'💥', type:'reps', reps:10, instruction:'Full body exercise — drop, push up, jump up. Keep moving!'},
      {name:'Jump Squats', icon:'⬆️', type:'reps', reps:15, instruction:'Squat down then explode upward. Land softly, absorb with knees.'},
      {name:'High Knees', icon:'🏃', type:'timed', duration:40, instruction:'Drive knees to hip height alternately at a fast pace.'},
      {name:'Mountain Climbers', icon:'🏔️', type:'timed', duration:40, instruction:'Fast knees to chest in plank position.'},
      {name:'Jumping Jacks', icon:'⭐', type:'timed', duration:40, instruction:'Classic cardio move. Keep a steady rhythm.'},
      {name:'Box Jumps', icon:'📦', type:'reps', reps:10, instruction:'Jump onto a surface, land softly, step back down.'},
      {name:'Speed Skaters', icon:'⛸️', type:'timed', duration:30, instruction:'Leap side to side, touching the floor with opposite hand.'},
      {name:'Tuck Jumps', icon:'🦘', type:'reps', reps:10, instruction:'Jump up and bring both knees to your chest at the peak.'}
    ]},
  { id:3, name:'Upper Body Power', icon:'💪', category:'chest', difficulty:'intermediate', duration:35, calories:250, equipment:'None', description:'Build upper body strength with push-up variations and shoulder exercises.',
    exercises:[
      {name:'Wide Push Ups', icon:'💪', type:'reps', reps:12, instruction:'Hands wider than shoulders. Lowers chest between hands.'},
      {name:'Diamond Push Ups', icon:'💎', type:'reps', reps:10, instruction:'Hands in diamond shape under chest. Targets triceps.'},
      {name:'Pike Push Ups', icon:'🔺', type:'reps', reps:10, instruction:'Hips high in inverted V, lower head toward floor. Works shoulders.'},
      {name:'Decline Push Ups', icon:'⬇️', type:'reps', reps:10, instruction:'Feet elevated on chair. Targets upper chest.'},
      {name:'Arm Circles', icon:'🔄', type:'timed', duration:30, instruction:'Extend arms, make forward then backward circles.'},
      {name:'Tricep Dips', icon:'🪑', type:'reps', reps:12, instruction:'Use a chair. Lower body by bending arms, push back up.'},
      {name:'Superman Hold', icon:'🦸', type:'timed', duration:30, instruction:'Lie face down, raise arms and legs off floor simultaneously.'}
    ]},
  { id:4, name:'Leg Day', icon:'🦵', category:'legs', difficulty:'beginner', duration:28, calories:240, equipment:'None', description:'Strengthen your legs and glutes with this targeted lower body session.',
    exercises:[
      {name:'Squats', icon:'🦵', type:'reps', reps:20, instruction:'Feet hip-width, sit back into squat, keep chest up.'},
      {name:'Reverse Lunges', icon:'🚶', type:'reps', reps:12, instruction:'Step backward into lunge. Better for knees than forward lunges.'},
      {name:'Glute Bridges', icon:'🌉', type:'reps', reps:20, instruction:'Lie on back, push hips to ceiling, squeeze glutes at top.'},
      {name:'Wall Sit', icon:'🧱', type:'timed', duration:45, instruction:'Back flat on wall, thighs parallel to floor. Hold still.'},
      {name:'Calf Raises', icon:'👟', type:'reps', reps:25, instruction:'Rise up on toes, lower slowly. Adds definition to calves.'},
      {name:'Single Leg Deadlift', icon:'🦩', type:'reps', reps:10, instruction:'Balance on one leg, hinge at hip, reach forward.'},
      {name:'Jump Squats', icon:'⬆️', type:'reps', reps:12, instruction:'Explosive squat jump. Land with soft knees.'}
    ]},
  { id:5, name:'Morning Stretch', icon:'🌅', category:'stretch', difficulty:'beginner', duration:15, calories:60, equipment:'None', description:'Wake up your body with this gentle morning stretching routine.',
    exercises:[
      {name:'Cat-Cow Stretch', icon:'🐱', type:'timed', duration:40, instruction:'On all fours, alternate arching and rounding your back slowly.'},
      {name:'Child\'s Pose', icon:'🧘', type:'timed', duration:30, instruction:'Kneel and reach arms forward on floor. Breathe deeply.'},
      {name:'Hip Circles', icon:'🔄', type:'timed', duration:30, instruction:'Stand with hands on hips, rotate in large circles.'},
      {name:'Standing Hamstring Stretch', icon:'🦵', type:'timed', duration:30, instruction:'Bend forward at hips, reach toward feet. Keep slight knee bend.'},
      {name:'Chest Opener', icon:'💞', type:'timed', duration:30, instruction:'Clasp hands behind back, squeeze shoulders together.'},
      {name:'Neck Rolls', icon:'🔵', type:'timed', duration:20, instruction:'Gently roll head in half circles, ear to shoulder.'}
    ]},
  { id:6, name:'HIIT Express', icon:'⚡', category:'cardio', difficulty:'advanced', duration:20, calories:300, equipment:'None', description:'Maximum intensity in minimum time. 40 seconds on, 20 seconds rest.',
    exercises:[
      {name:'Burpees', icon:'💥', type:'timed', duration:40, instruction:'All-out effort. Maximum reps in 40 seconds.'},
      {name:'Jump Squats', icon:'⬆️', type:'timed', duration:40, instruction:'Explosive power. Land soft, go again immediately.'},
      {name:'Mountain Climbers', icon:'🏔️', type:'timed', duration:40, instruction:'As fast as possible with control.'},
      {name:'High Knees', icon:'🏃', type:'timed', duration:40, instruction:'Pump arms. Knees to hip height every rep.'},
      {name:'Jumping Lunges', icon:'🦘', type:'timed', duration:40, instruction:'Alternate legs in the air. Land softly.'},
      {name:'Plank Jacks', icon:'⭐', type:'timed', duration:40, instruction:'Jump feet wide and back from plank position.'}
    ]},
  { id:7, name:'Glute Builder', icon:'🍑', category:'legs', difficulty:'intermediate', duration:30, calories:200, equipment:'None', description:'Targeted glute and hamstring workout for a stronger lower body.',
    exercises:[
      {name:'Glute Bridges', icon:'🌉', type:'reps', reps:20, instruction:'Drive hips up, squeeze hard at the top for 1 second.'},
      {name:'Donkey Kicks', icon:'🦵', type:'reps', reps:15, instruction:'On all fours, kick one leg back and up. Squeeze glute.'},
      {name:'Fire Hydrants', icon:'🔥', type:'reps', reps:15, instruction:'On all fours, lift knee out to the side. Keep hip stable.'},
      {name:'Hip Thrusts', icon:'⬆️', type:'reps', reps:20, instruction:'Shoulders on bench or sofa. Drive hips to ceiling.'},
      {name:'Single Leg Bridge', icon:'🦩', type:'reps', reps:12, instruction:'Glute bridge on one leg. Keep hips level throughout.'},
      {name:'Sumo Squats', icon:'🦵', type:'reps', reps:15, instruction:'Wide stance, toes out. Lower hips between heels.'},
      {name:'Romanian Deadlift', icon:'🏋️', type:'reps', reps:12, instruction:'Hinge at hips, push them back, feel hamstrings stretch.'}
    ]}
];

const EXERCISES = [
  {id:1,name:'Push Up',icon:'💪',muscle:'chest',area:'upper',difficulty:'beginner',equipment:'none',reps:'3x12',calPerMin:5,instructions:'Start in a plank position. Lower your chest to the floor keeping your body straight. Push back up explosively. Keep core tight throughout.',benefits:'Builds chest, shoulder and tricep strength. Improves core stability and posture.',tips:['Keep your body in a straight line from head to heel','Lower yourself slowly and push up fast','Keep elbows at 45 degree angle from body'],mistakes:['Letting hips sag or pike up','Flaring elbows out too wide','Not going through full range of motion']},
  {id:2,name:'Squat',icon:'🦵',muscle:'legs',area:'lower',difficulty:'beginner',equipment:'none',reps:'3x15',calPerMin:6,instructions:'Stand with feet shoulder-width apart. Push hips back and bend knees, lowering until thighs are parallel to floor. Drive through heels to stand.',benefits:'Builds quad, hamstring and glute strength. Improves mobility and functional movement.',tips:['Keep chest up and spine neutral','Push knees out in line with toes','Weight evenly on full foot'],mistakes:['Knees caving inward','Rounding the lower back','Heels rising off floor']},
  {id:3,name:'Plank',icon:'🤸',muscle:'core',area:'core',difficulty:'beginner',equipment:'none',reps:'3x30s',calPerMin:4,instructions:'Place forearms on floor. Hold body in a straight line from head to toe. Squeeze core, glutes and quads. Breathe steadily.',benefits:'Builds core strength and stability. Improves posture and reduces lower back pain.',tips:['Keep hips level — not up or down','Look at the floor to keep neck neutral','Breathe continuously, do not hold breath'],mistakes:['Letting hips sag','Holding breath','Looking forward and straining neck']},
  {id:4,name:'Burpee',icon:'💥',muscle:'cardio',area:'fullbody',difficulty:'intermediate',equipment:'none',reps:'3x10',calPerMin:10,instructions:'Stand, drop hands to floor, jump feet back to plank, do a push-up, jump feet to hands, then jump up with arms overhead. Repeat.',benefits:'Full body cardio exercise. Burns maximum calories, improves conditioning and builds total body strength.',tips:['Modify by stepping feet instead of jumping','Maintain push-up form in the middle','Land with soft knees on the jump'],mistakes:['Skipping the push-up','Landing hard on straight legs','Going too fast and losing form']},
  {id:5,name:'Lunge',icon:'🚶',muscle:'legs',area:'lower',difficulty:'beginner',equipment:'none',reps:'3x12 each',calPerMin:5,instructions:'Stand tall. Step one foot forward and lower your back knee toward the floor. Keep front knee over ankle. Push back to start.',benefits:'Builds single-leg strength and balance. Targets quads, hamstrings and glutes.',tips:['Keep upper body upright','Step far enough so front knee stays behind toes','Control the descent slowly'],mistakes:['Front knee going past toes','Leaning too far forward','Short steps that stress the knee']},
  {id:6,name:'Mountain Climbers',icon:'🏔️',muscle:'core',area:'fullbody',difficulty:'intermediate',equipment:'none',reps:'3x30s',calPerMin:9,instructions:'Start in push-up position. Alternately drive knees toward chest as fast as you can while keeping hips level.',benefits:'Cardio and core exercise combined. Burns calories and builds core stability.',tips:['Keep hips level and still','Land feet lightly','Engage core throughout'],mistakes:['Piking hips up high','Jumping too fast and losing control','Twisting torso with each knee drive']},
  {id:7,name:'Glute Bridge',icon:'🌉',muscle:'glutes',area:'lower',difficulty:'beginner',equipment:'none',reps:'3x20',calPerMin:4,instructions:'Lie on back with knees bent, feet flat. Push hips to ceiling by squeezing glutes. Pause at top, lower slowly.',benefits:'Activates and strengthens glutes and hamstrings. Reduces lower back pain.',tips:['Squeeze glutes hard at the top','Keep feet flat on the floor','Do not hyperextend the lower back'],mistakes:['Pushing through the lower back instead of glutes','Not pausing at the top','Feet too far or too close to hips']},
  {id:8,name:'Tricep Dip',icon:'🪑',muscle:'arms',area:'upper',difficulty:'beginner',equipment:'none',reps:'3x12',calPerMin:5,instructions:'Place hands on edge of chair or sofa. Lower body by bending elbows to 90 degrees. Push back up.',benefits:'Isolates triceps. Builds arm strength and improves pushing power.',tips:['Keep back close to the surface','Elbows point straight back','Lower slowly and push up controlled'],mistakes:['Letting elbows flare outward','Dropping too fast','Not going to 90 degrees']},
  {id:9,name:'High Knees',icon:'🏃',muscle:'cardio',area:'fullbody',difficulty:'beginner',equipment:'none',reps:'3x30s',calPerMin:8,instructions:'Run in place driving knees up to hip height alternately. Pump arms. Maintain a fast, controlled pace.',benefits:'Cardio exercise that warms up the whole body and burns calories quickly.',tips:['Pump arms to maintain speed','Land on balls of feet','Keep core engaged throughout'],mistakes:['Not lifting knees high enough','Landing heavily on heels','Hunching forward']},
  {id:10,name:'Superman',icon:'🦸',muscle:'back',area:'upper',difficulty:'beginner',equipment:'none',reps:'3x15',calPerMin:3,instructions:'Lie face down with arms extended. Simultaneously raise arms, chest and legs off the floor. Hold 2 seconds, lower.',benefits:'Strengthens lower back, glutes and hamstrings. Counteracts effects of sitting.',tips:['Squeeze glutes as you lift','Look down to keep neck neutral','Go slow and controlled'],mistakes:['Jerking up rapidly','Holding breath','Only lifting arms and not legs']},
  {id:11,name:'Jumping Jacks',icon:'⭐',muscle:'cardio',area:'fullbody',difficulty:'beginner',equipment:'none',reps:'3x45s',calPerMin:7,instructions:'Stand with feet together. Jump and simultaneously spread legs and raise arms overhead. Jump back to start.',benefits:'Simple cardio warm-up that elevates heart rate and loosens joints.',tips:['Land softly on balls of feet','Full arm raise overhead each rep','Maintain a steady rhythm'],mistakes:['Landing with straight locked knees','Rushing the arm movement','Stopping before time is up']},
  {id:12,name:'Diamond Push Up',icon:'💎',muscle:'arms',area:'upper',difficulty:'intermediate',equipment:'none',reps:'3x10',calPerMin:6,instructions:'Form a diamond shape with index fingers and thumbs. Do a push-up in this position. Primarily targets triceps.',benefits:'Isolates triceps more than standard push-ups. Builds arm definition.',tips:['Elbows track back toward hips','Keep core tight','Do not let lower back sag'],mistakes:['Going too fast','Elbows pointing outward','Not forming proper diamond shape']},
  {id:13,name:'Jump Squat',icon:'⬆️',muscle:'legs',area:'lower',difficulty:'intermediate',equipment:'none',reps:'3x12',calPerMin:9,instructions:'Perform a squat. As you drive up, explode off the floor. Land softly with bent knees and immediately go into the next squat.',benefits:'Builds explosive leg power and burns high calories.',tips:['Land with knees bent to absorb impact','Swing arms for momentum','Do not land on straight legs'],mistakes:['Hard heel landings','Not going low enough on squat','Rushing without control']},
  {id:14,name:'Russian Twist',icon:'🔄',muscle:'core',area:'core',difficulty:'intermediate',equipment:'none',reps:'3x20',calPerMin:5,instructions:'Sit with knees bent, lean back slightly, feet off floor. Rotate torso side to side touching floor beside hip each time.',benefits:'Works obliques and entire core. Improves rotational strength.',tips:['Keep chest tall throughout','Go slow and feel the rotation','Keep feet off floor for extra challenge'],mistakes:['Rounding the back','Using momentum instead of control','Moving only arms instead of torso']},
  {id:15,name:'Bicycle Crunch',icon:'🚲',muscle:'core',area:'core',difficulty:'beginner',equipment:'none',reps:'3x20',calPerMin:6,instructions:'Lie on back, hands behind head. Bring right knee to left elbow while extending left leg. Alternate sides in a cycling motion.',benefits:'Most effective ab exercise. Works rectus abdominis and obliques together.',tips:['Fully extend the straight leg','Do not pull on neck','Slow down for better muscle activation'],mistakes:['Pulling neck forward with hands','Going too fast to feel the burn','Not fully rotating torso']}
];

const PLANS = [
  { id:1, icon:'🌱', name:'7-Day Beginner Challenge', goal:'Build the habit', level:'Beginner', duration:20, description:'Perfect first week. Build a workout habit from scratch.',
    days:[
      {name:'Full Body Introduction', duration:20, exercises:6, calories:150},
      {name:'Rest & Stretch', duration:15, exercises:4, calories:60},
      {name:'Core Basics', duration:20, exercises:5, calories:140},
      {name:'Lower Body', duration:20, exercises:6, calories:160},
      {name:'Rest & Stretch', duration:15, exercises:4, calories:60},
      {name:'Upper Body', duration:20, exercises:6, calories:150},
      {name:'Full Body Finish', duration:25, exercises:8, calories:200}
    ]},
  { id:2, icon:'🔥', name:'14-Day Fat Loss', goal:'Lose weight', level:'Intermediate', duration:30, description:'Two weeks of cardio and HIIT to torch body fat.',
    days: Array.from({length:14}, (_, i) => ({name: i%7===1||i%7===4?'Active Recovery':'Fat Burn Session '+(i+1), duration:i%7===1?15:30, exercises:i%7===1?4:8, calories:i%7===1?80:280}))},
  { id:3, icon:'💪', name:'30-Day Full Body', goal:'Build fitness', level:'Beginner-Intermediate', duration:30, description:'A month of progressive full body workouts.',
    days: Array.from({length:30}, (_, i) => ({name: i%7===6?'Rest Day':'Full Body Day '+(i+1), duration:i%7===6?0:30, exercises:i%7===6?0:8, calories:i%7===6?0:240}))},
  { id:4, icon:'🎯', name:'30-Day Abs', goal:'Strong core', level:'All Levels', duration:20, description:'Daily core work for 30 days. Build a rock-solid midsection.',
    days: Array.from({length:30}, (_, i) => ({name:'Abs Session '+(i+1), duration:20, exercises:6, calories:160}))},
  { id:5, icon:'🏃', name:'21-Day Fat Loss', goal:'Lose weight fast', level:'Intermediate', duration:25, description:'Three weeks of HIIT and cardio to accelerate fat loss.',
    days: Array.from({length:21}, (_, i) => ({name:i%7===6?'Rest':'HIIT Session '+(i+1), duration:i%7===6?0:25, exercises:i%7===6?0:7, calories:i%7===6?0:300}))},
  { id:6, icon:'🌅', name:'Morning Routine', goal:'Daily energy', level:'All Levels', duration:15, description:'Start every day with a 15-minute energizing morning workout.',
    days: Array.from({length:14}, (_, i) => ({name:'Morning Session '+(i+1), duration:15, exercises:5, calories:100}))},
  { id:7, icon:'🦾', name:'No-Equipment Strength', goal:'Build strength', level:'Intermediate', duration:35, description:'Build real strength using only your bodyweight.',
    days: Array.from({length:21}, (_, i) => ({name:i%4===3?'Rest':'Strength Day '+(i+1), duration:i%4===3?0:35, exercises:i%4===3?0:9, calories:i%4===3?0:260}))}
];
