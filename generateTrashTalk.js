const generateTrashTalk = (job) => {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    founder: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  // translate job title from English to Mandarin Chinese
  const jobTranslate = (job) => {
    switch (job) {
      case 'engineer':
        return '工程師'
      case 'designer':
        return '設計師'
      case 'founder':
        return '創業家'
      default:
        return job
    }

  }

  // generate random element from an array
  const randomElementfromArray = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
  }


  // error handling if user did not select
  if (!job) return '請至少選擇一個職業！'

  // Generate trash talk
  let trashTalk = ''

  const target = jobTranslate(job)
  const randomTask = randomElementfromArray(task[job])
  const randomPhrase = randomElementfromArray(phrase)

  trashTalk += `${target}，${randomTask}，${randomPhrase}吧！`

  return trashTalk

}

module.exports = generateTrashTalk