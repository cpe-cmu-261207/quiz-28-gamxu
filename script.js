const btnRandom = document.getElementById("btn-random");
const imgProfile = document.getElementById("img-profile");
const pName = document.getElementById("p-name");
const pAddress = document.getElementById("p-address");
const pEmail = document.getElementById("p-email");

btnRandom.onclick = async () => {
  btnRandom.innerText = "Loading ...";
  btnRandom.disable = true;

  const resp = await axios.get("https://randomuser.me/api/");
  imgProfile.src = resp.data.results.picture.large;
  pName = resp.data.results.name;
  pEmail = resp.data.results.email;
  pAddress = resp.data.results.location;

  imgProfile.onload = () => {
    btnRandom.innerText = "Generate more ..";
    btnRandom.disable = false;
  };
};
