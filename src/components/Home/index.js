/* eslint-disable react/no-unknown-property */
import BlogList from '../BlogList'

import UserInfo from '../UserInfo'

import './index.css'

const Home = () => (
  <>
    <div className="home-container" testid="loader">
      <UserInfo />
      <BlogList />
    </div>
  </>
)

export default Home
