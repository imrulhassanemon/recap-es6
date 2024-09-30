const player = [74, 59, 65, 82, 64, 94];
// const selected = player.filter(p => p> 70);
// const selected = player.filter(p => p> 80);
const selected = player.filter(p => p%2 === 1);
console.log(selected);

const friends = ["Tom", "Jhon", "Michel", "Oliver"];
const oddFriends = friends.filter(friends => friends.length > 4);
console.log(oddFriends);


