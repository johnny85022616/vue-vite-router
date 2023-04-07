export default{
  addDay(date , days){
    date.replace(/(\d{4})\/(\d{2})\/(\d{2})\s(\d{2}):(\d{2}):(\d{2})/,'$1-$2-$3T$4:$5:$6')
    const d = new Date(date)
    d.setDate(d.getDate() + days)
    return d 
  }
}

