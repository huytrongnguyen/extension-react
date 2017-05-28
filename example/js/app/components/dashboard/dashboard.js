import { Route, Component } from '@/rext'
import DashboardView from './dashboard.view'

@Route('/')
@Component({
  view: DashboardView
})
export default class {
  constructor() {
    this.title = 'Dashboard'
  }
}