const mainHTML =
    `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chatique</title>
    <style>

    </style>
</head>

<body>
    <div class="container">
        <div id="header"></div>

        <h1>An Intro To Chatique</h1>
        <div class="date">January 12, 2025</div>
        <a href="https://chat.imkunal.ca" target="_blank"><img src="../chatique.png" alt=" Blog Post Image"></a>
        <div class="content">
            <div class="button-container">
                <a href="https://chat.imkunal.ca" target="_blank" class="buttonBlog">Visit the App</a>
            </div>
            <br>
            <p>The app is still a work in progress. I have a MVP hosted which includes just chatting and adding users
                via their email. I plan to add many more features to make it a full fledged chatting app. The site is
                hosted through AWS LightSail and I have a custom pipeline setup to deploy when I push to main.</p>
            <p>
                Tech Stack:
            <ul>
                <li>NodeJS</li>
                <li>PostgreSQL</li>
                <li>GraphQL</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>AWS LightSail</li>
                <li>AWS S3</li>
                <li>Nginx</li>
                <li>WebSocket</li>
            </ul>
            </p>
            <p>
                The inspiration behind this project was to get more familiar with TypeScript and also pickup some
                GraphQl. Both of which I have succesfully done. I also wanted to learn more of the DevOps side of things
                by learning how to contanerize my apps, host them through AWS, and also setup a rever proxy with Nginx.
                I want to use this space to talk about the structure of the app and also some of the challenges I faced
                while building it.
                <!-- TODO: make image clicakble -->
                <!-- talk abt app being in progress. list of features i want to add.  -->
            </p>
            <h2>Backend</h2>
            <p>Although I've worked on many complex full stack projects, I have never needed to design a database schema
                from the ground up myself. This was the first time I did it myself. And one of the biggest challenge
                that I faced was architecting a schema that would be future proof. Even as I was building my app, I
                realized that my initial schema choice wasn't ideal and I had to completely revamp it. The reason for
                wanting to futureproof is to avoid having to do complex migrations later on where you might drop columns
                or alter the tables in some shape. Another issue I had was visualizing what my queries would look like
                and how my schema should complement that. </p>
            <p>I think going forward, I will start on the frontend first which will allow me to see exactly what queries
                I might run which will help me better design the backend. </p>
            <p>One thing that I didn't quite do right was integrating TypeScript properly. The database ORM I used,
                Sequelize, isn't really built for TS yet. They recommend using a different package completely until they
                release their version but I didn't see this warning. This lead to some not so ideal typing in my backend
                files. Although it is fixable, I have researched some ORM's that seem to integrate with TS way better
                which like Prisma or TypeORM. Although, the features that Sequelize have built are just so convienent
                and well thought out. </p>
            <p>Lastly, there were two major new technologies that I worked with which were GraphQL and WebSockets. Both
                were relatively easy to pickup, however, working with GraphQL for the first time was a bit awkward
                feeling. However, I slowly started to prefer the structure of GraphQL where I get to define my resolvers
                seperately for mutations and queries and keep it aside from my schema. It also made frontend work really
                easy as I knew exactly what was being returned and how I can manipulate it. For the chat app, GraphQL
                just made sense because of the complex structure of the data that could be returned. To implement
                GraphQL, I made use of ApolloServer which has decent documentation but I often got lost of older
                versions of their documentation which slowed me down. </p>
            <p>Websockets were also a bit confusing to implement mainly because the documentation that ApolloServer
                provides is out of sync with the graphql-subscriptions package. Not a huge deal but another thing that
                caused me a lot of confusion. It was very fun to see WebSockets in action and implementing them wasn't
                too complicated. It does add an extra layer of complexity to the backend so I tried to minimize the
                usage to only parts of my app that require real time updates. </p>
            <h2>Frontend</h2>
            <p>To be frank, designing UI is not my cup of tea. I can make simple UI's but designing something that
                stands out was very difficult for me. I spent way too long trying to create the most perfect UI when I
                could have spent that time actually building the logic of the app. I wanted it to look perfect but, in
                that pursuit, I accomplished nothing. I did make use of Mantine UI for the component library. It has
                really simple designs that are easy customizable. </p>
            <p>I wish Mantine made it easier to define multiple colors schemes along with an easier control over primary
                colors. I ended up defining my own hook to use colors for the components. Also, I personally found a lot
                of tiny visual glithces with Mantine that make me feel like it isn't entirely production ready. For
                example, when scrolling, the scroll bar will often glitch or jump around which ruins the user
                experience. Another thing I noticed was when using the ScrollArea component, it would simply add a 'div'
                component with table display which messed up my other styling. I had to circumvent this by using a CSS
                file to target that div. This is apparently a known issue on their Github due to how they implement the
                ScrollArea.</p>
            <p>In terms of the logic in the frontend, I made use of ApolloClient and its built-in cache. This made my
                life really simple in terms of storing queried data. The documentation for the cache isn't the greatest
                but it gets the job done. There were a lot of bugs I had that were related to the cache and my usage of
                it. I also made use of CodeGen for GraphQL which made all my types for me and made my life so much
                easier in terms of creating the queries and mutations. TypeScript can be a blessing when used properly.
            </p>
            <p>Going forward, I will look into other library components and also focus less on design but more on
                functionality. I also did not build from the ground up for mobile responsiveness which was painful to
                implement later on.</p>
            <h2>Things I Want To Do Differently</h2>
            <p>For starters, I want to use a different ORM on the backend. One that can make better use of TypeScript
                out of the box. I will probably stick with NodeJS but I've always wanted to try C# and .Net for my
                backend. In the frontend, sticking to React is the better choice so that I can improve my React skills.
                I will probably use Material UI just so I don't have to work about design at all. I loved Mantine for
                its customizability but it slowed down my process and for these projects, I care more about
                functionality rather than design. I also spent a lot of time initially configuring TypeScript, a linter,
                and Prettier. I think next time I will just find a template online that incorporates them and start with
                that. I don't need extreme control over any of these components and I spent a lot of time on them. I
                could even make my own template to save time. But otherwise, the tech stack is solid and works really
                well. I will be using most of it for my next project for sure.
            </p>
        </div>
    </div>
</body>

</html>
`

export default mainHTML