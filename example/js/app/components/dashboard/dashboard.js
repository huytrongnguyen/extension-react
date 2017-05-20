import { Route, Component } from '@/rext'
import DashboardView from './dashboard.view'

@Route('/')
@Component({
  view: DashboardView,
  componentAs: 'Dashboard'
})
export default class Dashboard {
  constructor() {
    this.title = 'Dashboard'
  }
}