var express = require('express');
var cors = require('cors')
var app = express();

app.use(cors())

const alerts = [{
  priority: 'high',
  theme: 'Grooming',
  messageCount: 33,
  timeAgo: '12 minutes ago'
},
{
  priority: 'high',
  theme: 'Abuse',
  messageCount: 22,
  timeAgo: '35 minutes ago'
},
{
  priority: 'medium',
  theme: 'Grooming',
  messageCount: 112,
  timeAgo: '40 minutes ago'
},
{
  priority: 'medium',
  theme: 'Harassment',
  messageCount: 18,
  timeAgo: '41 minutes ago'
},
{
  priority: 'low',
  theme: 'Abuse',
  messageCount: 87,
  timeAgo: '46 minutes ago'
},
{
  priority: 'low',
  theme: 'Abuse',
  messageCount: 15,
  timeAgo: '46 minutes ago'
}]

app.get('/api/alerts', function(req, res){
  res.json(alerts);
});

app.listen(3050, () => console.log('Back end started'));
