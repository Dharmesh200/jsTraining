var num = Number(prompt('enter number'));
switch (num) {
    case 1: { console.log('sunday'); }
        break;
    case 2: { console.log('monday'); }
        break;
    case 3: { console.log('tuesday'); }
        break;
    case 4: { console.log('wednesday'); } break;
    case 5: { console.log('thursday'); } break;
    case 6: { console.log('friday'); } break;
    case 7: { console.log('saturday'); } break;
    default: { console.log('in valid number'); }
}

//example 2
var day = prompt('enter your day').toLocaleLowerCase();
switch (day) {
    case 'monday': { console.log(`Today is ${day}, todays sport is Cricket`); }
        break;
    case 'tuesday': { console.log(`Today is ${day}, todays sport is Basketball`); }
        break;
    case 'wednesday': { console.log(`Today is ${day}, todays sport is Cricket`); }
        break;
    case 'thursday': { console.log(`Today is ${day}, todays sport is Football`); }
        break;
    case 'friday': { console.log(`Today is ${day}, todays sport is Basketball`); }
        break;
    case 'saturday': { console.log(`Today is ${day}, todays sport is Football`); }
        break;
    default: { console.log('in valid information'); }
}