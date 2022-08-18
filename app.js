//Aside Element With Nav
class Aside extends React.Component {
    render(){
        return (
        <aside>
            <nav>
                <h3>Dashboard</h3>
                <a> Widget</a>
                <a> Reviews</a>
                <a> Customers</a>
                <a> Online Analysis</a>
                <a> Setting</a>
            </nav>
        </aside>
        )
    }
}
// Three sections up top
class Reviews extends React.Component {
    render(){
        return (
            <section>
                <h2>Reviews</h2>
                <p>1,281</p>
            </section>
        )
    }
}
class AvgRating extends React.Component {
    render(){
        return (
            <section>
                <h2>Average Rating</h2>
                <p>4.6</p>
            </section>
        )
    }
}
class Sentiment extends React.Component {
    render(){
        return (
            <section>
                <h2>Sentiment Analysis</h2>
                    <p>960</p>
                    <p>122</p>
                    <p>321</p>
            </section>
        )
    }
}
//Main WebUsers
class Data extends React.Component {
    render(){
        return <div class="inset"></div>
    }
}
class WebVisitors extends React.Component {
    render(){
        return (
        <section id="data">
            <div class='data2'>
                <h3>Website Visitors</h3>
                <p>821</p>
            </div>
            <Data/>
        </section>
        )
    }
}
class App extends React.Component {
    render(){
        return (
            <main>
                <Aside/>
                <div id="dataContainer">
                    <div id="show">
                        <Reviews/>
                        <AvgRating/>
                        <Sentiment/>
                    </div>
                    <WebVisitors/>
                </div>
            </main>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.querySelector('#all')
)