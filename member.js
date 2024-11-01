function skillsMember() {
    let member = {
        name: 'John',
        age: 30,
        skills: ['HTML', 'CSS', 'JS'],
        getSkills: function() {
            return this.skills;
        }
    }
    return member.getSkills();
}