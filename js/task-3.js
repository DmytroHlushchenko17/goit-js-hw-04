const profile = {
  username: 'Jacob',
  playTime: 300,
  getInfo: function () {
    return `"${this.username} has ${this.playTime} active hourse!"`;
  },
  changeUsername: function (newUsername) {
    if (typeof newUsername === 'string' && newUsername !== 0) {
      this.username = newUsername;
    }
  },
  updatePlayTime: function (addPlayTime) {
    if (typeof addPlayTime === 'number' && addPlayTime !== 0) {
      this.playTime += addPlayTime;
    }
    return `"${this.username} has ${this.playTime} active hourse!"`;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername('Marco');
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
