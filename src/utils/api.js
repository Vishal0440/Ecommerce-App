import axios from "axios";

const params = {
  headers: {
    Authorization:
      "bearer 84243d218e8c94a2764a18540fbf3ff4693d7fe164e9a261bacfae8fce0461db5d2960b082082e51b258fec2a36cd9b6d5bbaaf5f27e19b37dece12b2264da7963d6e4774de42d4f3c349709e736f1f95b686516d1f54438545dd95f4b18ec0235398947d763fdb50b4b0f2d0da2eb08401d6108dd5b8b4e05d1bb33261b6847",
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get("http://localhost:1337" + url, params);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
