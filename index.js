function combineUsers(...args) {
  const combineObject ={ users: []}
  for (let i = 0; i < args.length; i++) {
    combineObject.users.push(...args[i])
  } 
  combineObject.merge_date = Date.today().toString("M/d/yyyy")
  return combineObject
}           




module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};  



