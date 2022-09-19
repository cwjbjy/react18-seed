import API from '@/api/getData'

const button = document.createElement("button");

button.innerHTML = "获取数据";

button.onclick = () => {
  API.getCaipuData({ key: "37c421f7ca5b0614bf4911089128ac7e" }).then((res) => {
    console.log(res.data);
  });
};

document.body.appendChild(button);