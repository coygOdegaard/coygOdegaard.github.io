var posts=["2024/10/05/C语言-0/","2024/10/05/Java-1/","2024/10/04/hello-world/","2024/10/05/Kaggle/","2024/10/05/python2/","2024/10/05/Java题目-0/","2024/10/05/学习/","2024/10/08/数据清洗/","2024/10/05/数据结构1/","2024/10/05/职业/","2024/10/05/数据结构/","2024/10/05/问题/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };