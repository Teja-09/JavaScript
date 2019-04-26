let myTodo = 
{
    day: `Monday`,
    meetings: 20,
    meetDone: 10,

    addMeeting: function(num)
    {
        //console.log(this)
        // this is used for the current object
        // this contains all the present object
        this.meetings = this.meetings + num
    },

    summary : function()
    {
        return `I have ${this.meetings} meetings`
    }
}

myTodo.addMeeting(4)
console.log()
console.log(myTodo.summary())