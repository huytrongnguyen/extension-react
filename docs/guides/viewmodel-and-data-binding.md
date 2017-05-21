# ViewModel and Data Binding

Data binding and the ViewModel that powers it are powerful additions to Extension React.
Together they enable you to do more with less code and write in a much more declarative style while helping you maintain a clean separation of concerns.

A ViewModel is a class that manages a data object. It then allows those interested in this data to bind to it and be notified when it changes. The ViewModel, like ViewController, is owned by the view that references it. Because ViewModels are associated with a view, they are also able to link to a parent ViewModel owned by ancestor components in the component hierarchy. This allows child views to simply "inherit" the data of their parent ViewModel.

Components have a bind config that allows them to associate many of their configs to data from the ViewModel. Using bind, you can be sure that the appropriate component config will have its setter method called whenever the bound value changes - no custom event handlers needed.