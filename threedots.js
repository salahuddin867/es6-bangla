// spread operator

const ages = [11, 16, 12, 13]
const ages2 = [17, 16, 18, 19]
const ages3 = [25, 26, 27, 31]
const allAges = [...ages, ...ages2, 5, ...ages3];
// console.log(allAges);
const business = 650;
const minister = 450;
const sochib = 250;
const maximum = Math.max(business, minister, sochib)
// console.log(maximum);
const taka = [650, 850, 950, 10];
const maxi = Math.max(...taka);
// console.log(maxi);
var shooterGames = ['Call of Duty', 'Far Cry', 'Resident Evil'];
var racingGames = ['Need For Speed', 'Gran Turismo', 'Burnout'];
var games = [...shooterGames, ...racingGames];
// console.log(games);


