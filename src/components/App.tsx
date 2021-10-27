import React from "react"
import MoviePage from "./MoviePage"
import SearchMovie from "./Search"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Menu } from "antd"

const App = () => {
  return (
    <Router>
      <div>
        <Menu
          theme='dark'
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode='horizontal'
        >
          <Menu.Item key='1'>
            <Link to='/movie'>Tom Cruise's Movie</Link>
          </Menu.Item>
          <Menu.Item key='2'>
            <Link to='/search'>Search</Link>
          </Menu.Item>
        </Menu>
        <Switch>
          <Route path='/search'>
            <SearchMovie />
          </Route>
          <Route path='/movie'>
            <MoviePage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
