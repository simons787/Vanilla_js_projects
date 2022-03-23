
//Sleep debt calculator
// here are the weekly hours of sleep
const getSleepHours = (day) => {
    switch  (day) {
      case 'monday':
           return 8
           break;
      case 'tuesday':
            return 8
            break;
     case 'wednesday':
            return 8
            break;
     case 'thursday':
            return 8
            break;
   case 'friday':
            return 8
            break;
     case 'saturday':
            return 8
            break;
     case  'sunday':
            return 8
            break;
           default:
           return'error !!!';
    }
   };
   
   
   const getActualSleepHours = () => 
   getSleepHours('monday') +
   getSleepHours('tuesday') +
   getSleepHours('wednesday') +
   getSleepHours('thursday') +
   getSleepHours('friday') +
   getSleepHours('saturday') +
   getSleepHours('sunday');
   
   
   console.log(getActualSleepHours());
   
   
   const getIdealSleepHours = () => {
   let idealHours = 8;
    return idealHours * 7;
   };
   
   // calculate sleep debt in relation to the hours inserted before
   const calculateSleepDebt = () => {
   actualSleepHours = getActualSleepHours();
   idealSleepHours = getIdealSleepHours();
   if (actualSleepHours === idealSleepHours  ) {
     console.log('perfect amount of sleep');
   } else if (actualSleepHours > idealSleepHours) {
     console.log('more sleep than needed');
   } else if (actualSleepHours < idealSleepHours) {
   console.log('get some rest');
   }
   
   
   };
   
   //console.log(calculateSleepDebt());
   calculateSleepDebt();
   