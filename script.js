const getSleepHours = (day) => {
    switch(day) {
      case 'monday':
      return 8
      break;
      case 'tuesday':
      return 7
      break;
      case 'wednesday':
      return 7
      break;
      case 'thursday':
      return 9
      break;
      case 'friday':
      return 6
      break;
      case 'saturday':
      return 10
      break;
      case 'sunday':
      return 9
      break;
      default:
      return 'error'
    }
  };
  const getActualSleepHours = () => {    
   return getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');
  }
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours()
    const idealSleepHours = getIdealSleepHours()
    if (idealSleepHours === actualSleepHours) {
      console.log('you got the perfect amount of sleep this week!')
    } else if (idealSleepHours > actualSleepHours) {
      console.log('you need some more sleep! you were ' + (idealSleepHours - actualSleepHours) + ' hour(s) behind on your preffered amount of rest.')
    } else if (idealSleepHours < actualSleepHours) {
     console.log('you got ' + (actualSleepHours - idealSleepHours) + ' hour(s) of sleep more than you normally need in a week')
    }
  }
  calculateSleepDebt()