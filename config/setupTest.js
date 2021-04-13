import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import toJson from 'enzyme-to-json'
import Immutable from 'immutable'
import 'regenerator-runtime/runtime'
import dotenv from 'dotenv'

dotenv.config()
Enzyme.configure({ adapter: new Adapter() })

global.shallow = shallow
global.render = render
global.mount = mount
global.toJson = toJson
global.immutable = Immutable

console.error = message => {
  throw new Error(message)
}
