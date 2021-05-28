
require('dotenv').config()

const config=require('./config')
const twit=require('twit')
const T=new twit(config)
console.log("scanning for goalie updates!");
function retweet()
{
let params={
 q:'@GoalieStarter',
  result_type:'recent',
  count:100
}
T.get('search/tweets', params,(err,data,response)=>
{
let tweets=data.statuses
if(!err)
{
for(let dat of tweets)
{
 let retweetId = dat.id_str;
 T.post('statuses/retweet/:id', {id: retweetId}, (err, response)=>
 {
 if (response)
  console.log('Post retweeted!!! with retweetID - ' + retweetId)
 if (err)
  console.log('Already RETWEETED...')
 })}}})}
setInterval(retweet,60000)