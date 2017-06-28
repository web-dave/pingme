# API for my pingme messenger - a messenger PWA

### Endpoints

Endpoint|Method|Payload|Response
---|---|---|---
/users|get||users: String[]
/webpush|post|extended pushsubscription|200
/msg|post|message|200



#### extended pushsubscription
<pre>
{
    action: 'subscribe'|'unsubscribe',
    subscription: pushSubscription,
    user: username
}
</pre>

#### message
<pre>
{
   users: string[];
   msg: {
     msg: {
       title: string;
       message: string;
     }
     icon?: url | base64;
     badge?: url | base64;
     tag?: string;
     data?: url;
   }
}
</pre>
