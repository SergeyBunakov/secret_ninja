console.log("=== Управління доступом до об'єктів ===");
// =========
console.log("=== Захист закритих властивостей за допомогою отримання та встановлення ===");
function Ninja () {
    let skillLevel;
    this.getSkillLevel = () => skillLevel;

    this.setSkillLevel = value => {
        skillLevel = value;
    };
}

const ninja = new Ninja();

ninja.setSkillLevel(100);
console.log(ninja.getSkillLevel() === 100, "Our ninja is at level 100!");

ninja.setSkillLevel("Hello JavaScript!");
console.log(ninja.getSkillLevel() === "Hello JavaScript!", "Our ninja is at level \"Hello JavaScript!\"");

// =========
