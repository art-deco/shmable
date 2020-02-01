import shmable from '../src'

(async () => {
  const res = await shmable({
    text: 'example',
  })
  console.log(res)
})()