<html>
    <head>
        <title>Hacker News</title>
        <link rel="stylesheet" href="/public/css/new.css">
    </head>

    <body>
        <ul class="news-view view">
            {% for item in list %}
                <li class="item">
                    <h6>{{helper.relativeTime(item.time)}}</h6>
                    <p><span>英语：</span><span>{{item.english}}</span><p>
                    <p><span>中文：</span><span>{{item.chinese}}</span><p>
                </li>
            {% endfor %}
        </ul>
    </body>
</html>