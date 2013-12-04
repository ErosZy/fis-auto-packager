{%html framework="common:static/lib/js/mod.js" fid="001" sampleRate="1"%}
{%head%}
    <title>{%$title%}</title>
    <meta charset="utf-8" />

    {%require name="common:static/lib/css/base.css"%}
    {%require name="common:static/lib/js/lib.js"%}
    {%require name="common:static/lib/js/BigPipe.js"%}
    {%require name="common:static/css/layout.css"%}
    {%require name="common:static/lib/js/spljs/spljs.js"%}
    {%script%}
        SplJs.init();
        SplJs.start({
            targets: ['a', '.message-item']
        });
    {%/script%}
{%/head%}

{%body%}

    <div class="pure-g-r content" id="layout">
        <div class="pure-u" id="nav">
            <a href="#" class="nav-menu-button">Menu</a>

            <div class="nav-inner">
                <button class="pure-button primary-button">Compose</button>

                <div class="pure-menu pure-menu-open">
                    <ul>
                        <li><a data-href="/index/page/index" data-area="pager">Inbox <span class="email-count">(2)</span></a></li>
                        <li><a href="#">Important</a></li>
                        <li><a href="#">Sent</a></li>
                        <li><a href="#">Drafts</a></li>
                        <li><a href="#">Trash</a></li>
                        <li class="pure-menu-heading">Labels</li>
                        <li><a href="#"><span class="email-label-personal"></span>Personal</a></li>
                        <li><a href="#"><span class="email-label-work"></span>Work</a></li>
                        <li><a href="#"><span class="email-label-travel"></span>Travel</a></li>
                    </ul>
                </div>
            </div>
        </div>

            {%block name="main"%}{%/block%}


    </div>
{%script%}
require("common:widget/ui/a.js");
require.async("common:widget/ui/b.js");
{%/script%}
{%require name='common:page/layout.tpl'%}{%/body%}
{%/html%}
