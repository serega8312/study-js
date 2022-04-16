

function getFamilyStatus(isMarried, isMale) {

  if (isMarried) {
    if (isMale) {
      return 'женат';
    } else {
      return 'замужем';
    }

  } else {
    if (isMale) {
      return 'не женат';
    } else {
      return 'не замужем';
    }
  }
}



function showUserInfo(userInfo) {
  const div = document.getElementById('userInfo');
  div.innerText = getUserInfoText(userInfo);


}

function getUserInfo() {
  const age = document.getElementById('age').value;
  const name = document.getElementById('name').value;
  const isMarried = document.getElementById('isMarried').checked;
  const isMale = document.getElementById('isMale').checked;
  const userInfo = {
    age: age,
    name: name,
    isMarried: isMarried,
    isMale: isMale
  };
  return userInfo;
}

function getUserInfoText(userInfo) {
  return userInfo.name + ' ' + userInfo.age + ' ' + getFamilyStatus(userInfo.isMarried, userInfo.isMale);
}

const myModal = document.getElementById('exampleModal');
myModal.addEventListener('shown.bs.modal', function () {
  showUserInfo(getUserInfo());
})
