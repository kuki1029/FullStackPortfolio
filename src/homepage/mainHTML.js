const mainHTML = `<div id='mainPage'>
    <div id='home'>
        <canvas id='canvas'></canvas>
        <!-- Not ideal but I wanted the font type/size specific spacing -->
        <span class='homepage-text' id='txtInfinity'>
            K&nbsp;&nbsp;&nbsp;&nbsp;
            U&nbsp;&nbsp;&nbsp;&nbsp;
            N&nbsp;&nbsp;&nbsp;&nbsp;
            A&nbsp;&nbsp;&nbsp;&nbsp;
            L&nbsp;&nbsp;&nbsp;&nbsp;
            <br>
            V&nbsp;&nbsp;&nbsp;&nbsp;
            A&nbsp;&nbsp;&nbsp;&nbsp;
            R&nbsp;&nbsp;&nbsp;&nbsp;
            K&nbsp;&nbsp;&nbsp;&nbsp;
            E&nbsp;&nbsp;&nbsp;&nbsp;
            K&nbsp;&nbsp;&nbsp;&nbsp;
            A&nbsp;&nbsp;&nbsp;&nbsp;
            R&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
    </div>

    <!--  Inserted in JS -->
    <div class='black_hole'>
        <div id='header'></div>
        <div id='about'></div>
        <div id='projects'></div>
        <div id='contact'></div>
    </div>
</div>

<script type='module' src='./stars/stars.js'></script>`

export default mainHTML