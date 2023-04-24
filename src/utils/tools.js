export default{
  addDay(date , days){
    date.replace(/(\d{4})\/(\d{2})\/(\d{2})\s(\d{2}):(\d{2}):(\d{2})/,'$1-$2-$3T$4:$5:$6')
    const d = new Date(date)
    d.setDate(d.getDate() + days)
    return d 
  },
  minusDay(date , days){
    date.replace(/(\d{4})\/(\d{2})\/(\d{2})\s(\d{2}):(\d{2}):(\d{2})/,'$1-$2-$3T$4:$5:$6')
    const d = new Date(date)
    d.setDate(d.getDate() - days)
    return d 
  },
  //只會執行最後一次
  unbounce(func,delay){
    var time
    return function(args){
      let that = this
      clearTimeout(time) 
      time = setTimeout(function(){
        func.call(that, args)
      },delay)
    }
  },
  //一定時間內只會執行一次
  throttle(func, delay){
    var lastTime 
    return function (){
      let nowTime = new Date()
      if(nowTime - lastTime > delay){
        func();
      }
    }
  } 
}
