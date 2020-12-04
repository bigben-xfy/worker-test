self.onmessage = async event => {
  console.log("worker", event);
  await new Promise(resolve => setTimeout(resolve, 2000));
  self.postMessage({
    msg: "finish"
  });
};
