/**************************************************************************/
// declare types from existing functions
type LogLevel = "debug" | "warn" | "error";
const myLoggingFunction = (message: string, level: LogLevel = "debug") => {
    // implement your logging function
    console[level](message);
};

// DO NOT CHANGE CODE AFTER THIS LINE

type LogFunction = typeof myLoggingFunction;

function doMagicStuff(log: LogFunction) {
    // imagine, that this function does some complex algorithm

    log("Starting")

    log("Processing")

    log("There was an error!", "error");

    log("Clean up")

    log("Finished")
}

doMagicStuff(myLoggingFunction)

/**************************************************************************/
// make properties optional
type ToolProperties = {
    title: string
    tooltip: string
    icon: string
}

class Tool {

    title = ""
    tooltip = ""
    icon = ""

    activate(properties: Partial<ToolProperties>) {
        this.title = properties.title || ""
        this.tooltip = properties.tooltip || ""
        this.icon = properties.icon || ""
    }
}

// DO NOT CHANGE CODE AFTER THIS LINE

const searchTool = (new Tool()).activate({ title: "Search", tooltip: "Search for features", icon: "mdi-search" })
const printingTool = (new Tool()).activate({ title: "Print", tooltip: "Print map", icon: "mdi-print" })
const zoomTool = (new Tool()).activate({ title: "Zoom", icon: "mdi-zoom" });
const exitTool = (new Tool()).activate({ title: "Quit", tooltip: "Quit app" });

/**************************************************************************/
// be careful with the "any" type

type Person = {
    name: string
    hobbies: string[]
}

function isPerson(data: unknown): data is Person {
    if (!(data && typeof data === "object")) {
        return false
    }
    return ("name" in data) && ("hobbies" in data);
}

(() => {
    const data = `{"name": "Max Mustermann", "hobbies": ["typescript"]}`;
    const myAnyData = JSON.parse(data) as unknown;
    if (!isPerson(myAnyData)) {
        return
    }

    // the following line should throw an error by the typescript compiler
    console.log(myAnyData.dateOfBirth);

})();

/**************************************************************************/

// be careful with the "any" type

const data = `{"name": "Max Mustermann", "hobbies": ["typescript"]}`;
const myAnyData = JSON.parse(data);


// the following line should throw an error by the typescript compiler
console.log(myAnyData.dateOfBirth);

/**************************************************************************/

// try to define the typeof "I18nLabels" to be generated from the variable "modes"
const modes = ["manual", "auto"] as const;

type I18nLabels = Record<typeof modes[number], string>

const englishLabels: I18nLabels = { manual: "manual", auto: "automatic" };
const germanLabels: I18nLabels = { manual: "manuell", auto: "automatisch" };
