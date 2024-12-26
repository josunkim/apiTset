const postButton = document.getElementById("postBtn");
const mbti = document.getElementById("mbti");
const color = document.getElementById("colorCode");
const box = document.querySelector(".data");

let mbtiData = "";

postButton.addEventListener("click", async () => {
  post();
  await get();
  const div = document.createElement("div");
  mbtiData.map((d) => {
    console.log(d);
    const p = document.createElement("p");
    p.textContent = d.id + "  " + d.mbti + " " + d.colorCode;
    div.appendChild(p);
  });
  document.body.appendChild(div);
  console.log(mbtiData);
});

const post = async () => {
  const url = "https://learn.codeit.kr/api/color-surveys";
  const data = { mbti: mbti.value, colorCode: color.value, password: "1234" };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return console.log("Success:", response);
  } catch (error) {
    console.error("Error:", error);
  }
};

const get = async () => {
  const url = "https://learn.codeit.kr/api/color-surveys";
  try {
    const response = await fetch(url);
    const result = await response.json();
    return (mbtiData = result.results);
  } catch (error) {
    console.error("Error:", error);
  }
};
