function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const author = {
    name: "Tariq",
    lastName: "Omar",
    job: "Frontend Web developer",
    img: "pic/nft1.jpg" };
  
  let activities = [
  {
    id: 1,
    time: "08:35 am",
    title: "Teamwork",
    state: "none" },
  
  {
    id: 2,
    time: "14:00 am",
    title: "Meeting",
    state: "active" },
  
  
  {
    id: 3,
    time: "16:00 am",
    title: "Testing application",
    state: "none" },
  
  {
    id: 4,
    time: "16:00 pm",
    title: "Play with React",
    state: "none" },
  
  {
    id: 5,
    time: "18:00 am",
    title: "Time for coffe",
    state: "active" }];
  
  
  
  class Header extends React.Component {
    render() {
      return /*#__PURE__*/(
  
        React.createElement("div", { className: "header-container-todo" }, /*#__PURE__*/
        React.createElement(Author, { aut: author }), /*#__PURE__*/
  
  
        React.createElement("div", { className: "triangle" }, /*#__PURE__*/
        React.createElement("span", { className: "t-text" }, "My Tasks"))));
  
  
  
  
  
  
    }}
  
  class Author extends React.Component {
    render() {
      const aut = this.props.aut;
      return /*#__PURE__*/(
        React.createElement("div", { className: "header-todo" }, /*#__PURE__*/
  
        React.createElement("img", { src: aut.img, alt: "" }), /*#__PURE__*/
        React.createElement("div", { className: "info-todo" }, /*#__PURE__*/
        React.createElement("h3", null, aut.name, " ", aut.lastName), /*#__PURE__*/
        React.createElement("span", null, aut.job))));
  
  
  
    }}
  
  class BtnAddTask extends React.Component {
  
    render() {
  
      return /*#__PURE__*/(
        React.createElement("div", { onClick: this.props.openAddView, className: "add-btn-container-todo" }, " ", /*#__PURE__*/React.createElement("button", { className: "addButton-todo" }, /*#__PURE__*/React.createElement("i", { className: "fa fa-plus", "aria-hidden": "true" }))));
  
    }}
  
  
  class Activity extends React.Component {
    constructor(props) {
      super(props);_defineProperty(this, "hideControle",
  
  
  
  
  
  
  
      () => {
        this.setState({
          display: "none" });
  
      });this.state = { display: "none", active: false, activity_id: this.props.taskId };}
  
    showControle() {
      this.setState({
        display: this.state.display == "block" ? "none" : "block" });
  
  
    }
    validate() {
      this.props.sendId(
      this.props.taskId);
    }
    edit() {
      this.props.edit(this.props.act);
  
    }
  
  
    render() {
      let activityClass = ["activity-container-todo"];
  
      if (this.props.act.state === "active") {
        activityClass.push('active');
      }
      const act = this.props.act;
  
      return /*#__PURE__*/(
        React.createElement("div", { onMouseLeave: this.hideControle, className: activityClass.join(' ') }, /*#__PURE__*/
        React.createElement("div", { className: "activity-data inline-todo" }, /*#__PURE__*/
        React.createElement("span", null, act.time), /*#__PURE__*/
        React.createElement("h3", { className: "a-text-todo" }, act.title, " ")), /*#__PURE__*/
  
        React.createElement("div", { className: "activity-controle inline-todo" }, /*#__PURE__*/
        React.createElement("div", { className: "controle-todo" }, /*#__PURE__*/
        React.createElement("div", { style: { display: this.state.display }, className: "operator-todo" }, /*#__PURE__*/
        React.createElement("button", { id: this.props.taskId, onClick: this.edit.bind(this), className: "c-icon-op tl edit" }, /*#__PURE__*/React.createElement("i", { className: "fa fa-pencil" })), /*#__PURE__*/
        React.createElement("button", { onClick: this.validate.bind(this), id: this.props.taskId, className: "c-icon-op check" }, /*#__PURE__*/React.createElement("i", { className: "fa fa-check" })), /*#__PURE__*/
        React.createElement("button", { id: this.props.taskId, onClick: this.props.delete, className: "c-icon-op tl delete" }, /*#__PURE__*/React.createElement("i", { id: this.props.taskId, className: "fa fa-trash-o" }))), /*#__PURE__*/
  
  
        React.createElement("button", { onClick: this.showControle.bind(this), className: "c-icon-todo" }, /*#__PURE__*/React.createElement("i", { className: "fa fa-cog" }))))));
  
  
  
  
  
    }}
  
  class ViewUpdateTask extends React.Component {
    constructor(props) {
      super(props);_defineProperty(this, "update",
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
      () => {
  
        if (this.state.title != "") {
          let t = { id: this.state.prevID, time: this.state.minutes + ":" + this.state.seconds + " " + this.state.format, title: this.state.title, state: this.state.prevState };
  
          this.props.update_Data(t);
          this.setState({
            notifieme: true });
  
  
          setTimeout(function () {this.setState({ notifieme: false });}.bind(this), 3000);
  
        } else
        {
          this.setState({
            inputState: "required" });
  
  
        }
  
      });this.state = { initialState: "none", title: this.props.prevData.title, minutes: this.props.prevData.time.substring(0, 2), seconds: this.props.prevData.time.substring(3, 5), format: this.props.prevData.time.substring(6, 8), prevID: this.props.prevData.id, prevState: this.props.prevData.state, countm: 0, counts: 0, inputState: "", notifieme: false };}updateTitle(e) {this.setState({ title: e.target.value, inputState: "" });}updateM(e) {if (e.target.value <= 11 && e.target.value >= 0 && e.target.value.length <= 2) {this.setState({ minutes: e.target.value });}}updateS(e) {if (e.target.value <= 59 && e.target.value >= 0 && e.target.value.length <= 2) {this.setState({ seconds: e.target.value });}}updateF(e) {e.preventDefault();}minuteUp() {this.setState({ countm: this.state.countm < 11 ? this.state.countm + 1 : this.state.countm, minutes: this.state.countm < 10 ? "0" + this.state.countm.toString() : this.state.countm.toString() });}minuteDown() {this.setState({ countm: this.state.countm > 0 ? this.state.countm - 1 : this.state.countm, minutes: this.state.countm < 10 ? "0" + this.state.countm.toString() : this.state.countm.toString() });}secondUp() {this.setState({ counts: this.state.counts < 59 ? this.state.counts + 1 : this.state.counts, seconds: this.state.counts < 10 ? "0" + this.state.counts.toString() : this.state.counts.toString() });}secondDown() {this.setState({ counts: this.state.counts > 0 ? this.state.counts - 1 : this.state.counts, seconds: this.state.counts < 10 ? "0" + this.state.counts.toString() : this.state.counts.toString() });}setFormat() {this.setState({ format: this.state.format == "am" ? "pm" : "am" });}
  
  
    render() {
      let notification = this.state.title;
      return /*#__PURE__*/(
  
        React.createElement("div", { className: "AddTaskContainer-todo" }, /*#__PURE__*/
  
        React.createElement("div", { className: "AddTaskControle" },
        this.state.notifieme && /*#__PURE__*/
        React.createElement("div", { className: "notifiy-todo" }, /*#__PURE__*/
        React.createElement("span", { className: "notifiy-todo-icon" }, /*#__PURE__*/React.createElement("i", { className: "fa fa-check" })), /*#__PURE__*/
        React.createElement("span", { className: "notifiy-todo-text" }, "Success"), /*#__PURE__*/
        React.createElement("h5", { className: "notifiy-todo-task" }, notification.indexOf(" ") == -1 ? notification : notification.substr(0, notification.search(" ")).concat(' ...'))), /*#__PURE__*/
  
  
  
        React.createElement("button", { onClick: this.props.close, className: "close-w-todo" }, /*#__PURE__*/React.createElement("i", { className: "fa fa-times" })), /*#__PURE__*/
        React.createElement("div", { className: "containerTime-todo" }, /*#__PURE__*/
        React.createElement("div", { className: "containerInput-todo" }, /*#__PURE__*/
        React.createElement("button", { onClick: this.minuteUp.bind(this) }, /*#__PURE__*/React.createElement("i", { className: "fa fa-chevron-up" })), /*#__PURE__*/
        React.createElement("input", { type: "text", onChange: this.updateM.bind(this), value: this.state.minutes, className: "timeInput-todo" }), /*#__PURE__*/
        React.createElement("button", { onClick: this.minuteDown.bind(this) }, /*#__PURE__*/React.createElement("i", { className: "fa fa-chevron-down" }))), /*#__PURE__*/
  
        React.createElement("div", { className: "containerInput-todo" }, /*#__PURE__*/
        React.createElement("button", { onClick: this.secondUp.bind(this) }, /*#__PURE__*/React.createElement("i", { className: "fa fa-chevron-up" })), /*#__PURE__*/
        React.createElement("input", { onChange: this.updateS.bind(this), value: this.state.seconds, className: "timeInput-todo" }), /*#__PURE__*/
        React.createElement("button", { onClick: this.secondDown.bind(this) }, /*#__PURE__*/React.createElement("i", { className: "fa fa-chevron-down" }))), /*#__PURE__*/
  
        React.createElement("div", { className: "containerInput-todo" }, /*#__PURE__*/
        React.createElement("button", { onClick: this.setFormat.bind(this) }, /*#__PURE__*/React.createElement("i", { className: "fa fa-chevron-up" })), /*#__PURE__*/
        React.createElement("input", { onKeyDown: this.updateF.bind(this), value: this.state.format, className: "timeInput-todo" }), /*#__PURE__*/
        React.createElement("button", { onClick: this.setFormat.bind(this) }, /*#__PURE__*/React.createElement("i", { className: "fa fa-chevron-down" })))), /*#__PURE__*/
  
  
  
        React.createElement("label-todo", null, this.state.minutes + ":" + this.state.seconds + " " + this.state.format), /*#__PURE__*/
  
        React.createElement("input", { className: "InputTaskName-todo" + " " + this.state.inputState,
          onChange: this.updateTitle.bind(this),
          value: this.state.title, type: "text",
          required: true }), /*#__PURE__*/
        React.createElement("button", { onClick: this.update, className: "btn-save-todo" }, "Update"))));
  
  
  
  
  
  
    }}
  
  class ViewAddTask extends React.Component {
    constructor(props) {
      super(props);_defineProperty(this, "add",
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
      () => {
  
        if (this.state.title != "") {
          let t = { id: "", time: this.state.minutes + ":" + this.state.seconds + " " + this.state.format, title: this.state.title, state: this.state.initialState };
  
          this.props.sendData(t);
          this.setState({
            notifieme: true });
  
  
          setTimeout(function () {this.setState({ notifieme: false });}.bind(this), 3000);
  
        } else
        {
          this.setState({
            inputState: "required" });
  
  
        }
  
      });this.state = { initialState: "none", title: "", minutes: "00", seconds: "00", format: "am", countm: 0, counts: 0, inputState: "", notifieme: false };}updateTitle(e) {this.setState({ title: e.target.value, inputState: "" });}updateM(e) {if (e.target.value <= 11 && e.target.value >= 0 && e.target.value.length <= 2) {this.setState({ minutes: e.target.value });}}updateS(e) {if (e.target.value <= 59 && e.target.value >= 0 && e.target.value.length <= 2) {this.setState({ seconds: e.target.value });}}updateF(e) {e.preventDefault();}minuteUp() {this.setState({ countm: this.state.countm < 11 ? this.state.countm + 1 : this.state.countm, minutes: this.state.countm < 10 ? "0" + this.state.countm.toString() : this.state.countm.toString(), fTT: this.state.minutes + ":" + this.state.seconds + " " + this.state.format });}minuteDown() {this.setState({ countm: this.state.countm > 0 ? this.state.countm - 1 : this.state.countm, minutes: this.state.countm < 10 ? "0" + this.state.countm.toString() : this.state.countm.toString() });}secondUp() {this.setState({ counts: this.state.counts < 59 ? this.state.counts + 1 : this.state.counts, seconds: this.state.counts < 10 ? "0" + this.state.counts.toString() : this.state.counts.toString() });}secondDown() {this.setState({ counts: this.state.counts > 0 ? this.state.counts - 1 : this.state.counts, seconds: this.state.counts < 10 ? "0" + this.state.counts.toString() : this.state.counts.toString() });}setFormat() {this.setState({ format: this.state.format == "am" ? "pm" : "am" });}
  
  
    render() {
      let notification = this.state.title;
      return /*#__PURE__*/(
  
        React.createElement("div", { className: "AddTaskContainer-todo" }, /*#__PURE__*/
  
        React.createElement("div", { className: "AddTaskControle" },
        this.state.notifieme && /*#__PURE__*/
        React.createElement("div", { className: "notifiy-todo" }, /*#__PURE__*/
        React.createElement("span", { className: "notifiy-todo-icon" }, /*#__PURE__*/React.createElement("i", { className: "fa fa-check" })), /*#__PURE__*/
        React.createElement("span", { className: "notifiy-todo-text" }, "Success"), /*#__PURE__*/
        React.createElement("h5", { className: "notifiy-todo-task" }, notification.indexOf(" ") == -1 ? notification : notification.substr(0, notification.search(" ")).concat(' ...'))), /*#__PURE__*/
  
  
  
        React.createElement("button", { onClick: this.props.close, className: "close-w-todo" }, /*#__PURE__*/React.createElement("i", { className: "fa fa-times" })), /*#__PURE__*/
        React.createElement("div", { className: "containerTime-todo" }, /*#__PURE__*/
        React.createElement("div", { className: "containerInput-todo" }, /*#__PURE__*/
        React.createElement("button", { onClick: this.minuteUp.bind(this) }, /*#__PURE__*/React.createElement("i", { className: "fa fa-chevron-up" })), /*#__PURE__*/
        React.createElement("input", { onChange: this.updateM.bind(this), value: this.state.minutes, className: "timeInput-todo" }), /*#__PURE__*/
        React.createElement("button", { onClick: this.minuteDown.bind(this) }, /*#__PURE__*/React.createElement("i", { className: "fa fa-chevron-down" }))), /*#__PURE__*/
  
        React.createElement("div", { className: "containerInput-todo" }, /*#__PURE__*/
        React.createElement("button", { onClick: this.secondUp.bind(this) }, /*#__PURE__*/React.createElement("i", { className: "fa fa-chevron-up" })), /*#__PURE__*/
        React.createElement("input", { onChange: this.updateS.bind(this), value: this.state.seconds, className: "timeInput-todo" }), /*#__PURE__*/
        React.createElement("button", { onClick: this.secondDown.bind(this) }, /*#__PURE__*/React.createElement("i", { className: "fa fa-chevron-down" }))), /*#__PURE__*/
  
        React.createElement("div", { className: "containerInput-todo" }, /*#__PURE__*/
        React.createElement("button", { onClick: this.setFormat.bind(this) }, /*#__PURE__*/React.createElement("i", { className: "fa fa-chevron-up" })), /*#__PURE__*/
        React.createElement("input", { onChange: this.updateF.bind(this), value: this.state.format, className: "timeInput-todo" }), /*#__PURE__*/
        React.createElement("button", { onClick: this.setFormat.bind(this) }, /*#__PURE__*/React.createElement("i", { className: "fa fa-chevron-down" })))), /*#__PURE__*/
  
  
  
        React.createElement("label-todo", null, this.state.minutes + ":" + this.state.seconds + " " + this.state.format), /*#__PURE__*/
  
        React.createElement("input", { className: "InputTaskName-todo" + " " + this.state.inputState, onChange: this.updateTitle.bind(this), value: this.state.title, type: "text", placeholder: "Type your Task name ...", required: true }), /*#__PURE__*/
        React.createElement("button", { onClick: this.add, className: "btn-save-todo" }, "save"))));
  
  
  
  
  
  
    }}
  
  class Footer extends React.Component {
  
    render() {
      return /*#__PURE__*/(
        React.createElement("div", { className: "footer" }, /*#__PURE__*/
        React.createElement("span", { className: "tCompleted" }, this.props.tasksCompleted)));
  
  
  
  
    }}
  
  class App extends React.Component {
    constructor(props) {
      super(props);_defineProperty(this, "openW",
  
  
  
  
  
  
  
  
  
  
      () => {
        this.setState({
          display: true });
  
  
      });_defineProperty(this, "closeW",
  
      () => {
        this.setState({
          display: false });
  
      });_defineProperty(this, "close_edit",
      () => {
        this.setState({
          edit_view: false });
  
      });_defineProperty(this, "deleteTask",
      e => {
        let ID = e.target.id;
        let data = this.state.a;
        data = data.filter(el => el.id != ID);
        this.setState({
          a: data });
  
  
  
      });_defineProperty(this, "AddTasks",
  
      val => {
  
        let data = this.state.a;
        if (data.length != 0) {
          val.id = data[data.length - 1].id + 1;
        } else {
          val.id = 1;
        }
  
        data.push(val);
        this.setState({
          a: data });
  
  
      });_defineProperty(this, "validateTask",
      taskId => {
  
  
        let data = this.state.a;
        for (var i in data)
        {
          if (data[i].id == taskId)
          {
            data[i].state = data[i].state === "active" ? "" : "active";
          }
        }
  
        this.setState({
          a: data });
  
      });_defineProperty(this, "update_Task",
  
  
  
  
  
  
  
      up_data => {
        let data = this.state.a;
        data = data.map(obj => obj.id == up_data.id ? obj = up_data : obj);
  
        this.setState({
          a: data });
  
  
      });_defineProperty(this, "updateTask",
  
      data => {
        this.setState({ edit_view: true, currentData: data });
        this.props.sended_data = data;
  
      });this.state = { display: false, a: activities, currentID: 0, currentData: { id: 0, time: "00", title: 'test', state: "active" }, completed: 0, edit_view: false };}CompletedTask() {let data = this.state.a;data = data.filter(el => el.state == "active");}
    render() {
      let taskCpt = this.state.a.filter(el => el.state == "active").length;
  
      let totalTasks = this.state.a.length;
      return /*#__PURE__*/(
        React.createElement("div", { className: "TodoAR" }, /*#__PURE__*/
  
        React.createElement("div", { className: "container" }, /*#__PURE__*/
        React.createElement(Header, null), /*#__PURE__*/
        React.createElement(BtnAddTask, { openAddView: this.openW }),
  
  
        this.state.a.map((x) => /*#__PURE__*/
        React.createElement(Activity, {
          taskId: x.id,
          sendId: this.validateTask,
          delete: this.deleteTask,
          edit: this.updateTask,
  
          act: x })), /*#__PURE__*/
  
        React.createElement(Footer, {
  
          tasksCompleted: (() => {
            switch (taskCpt) {
              case 0:return "There is no Tasks";
              case 1:return " One Task Completed";
              case totalTasks:return "All Tasks Completed";
              default:return taskCpt + "/" + totalTasks + " Tasks Completed";}
  
          })() })),
  
  
  
        this.state.display && /*#__PURE__*/
        React.createElement(ViewAddTask, { close: this.closeW, sendData: this.AddTasks }),
  
        this.state.edit_view && /*#__PURE__*/React.createElement(ViewUpdateTask, {
          prevData: this.props.sended_data,
  
          close: this.close_edit,
          update_Data: this.update_Task })));
  
  
  
    }}
  
  let mount = document.querySelector('#app');
  ReactDOM.render( /*#__PURE__*/React.createElement(App, null), mount);