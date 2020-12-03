self.onmessage = event => {
  console.log('worker', event)
  const { data } = event
  console.log(data)
  self.postMessage({
    msg: 'finish'
  })
}