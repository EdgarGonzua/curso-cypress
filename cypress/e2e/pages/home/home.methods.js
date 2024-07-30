import { HomeElements } from "./home.elements";

export class HomeMethods{
    static clickOnPhonesOption(){
        HomeElements.categoriesMenu.phones.click();
    }

    static clickOnLaptopsOption(){
        HomeElements.categoriesMenu.laptops.click();
    }

    static clickOnMonitorOption(){
        HomeElements.categoriesMenu.monitor.click();
    }

    static clicOnProductLink(productName){
        HomeElements.product(productName).click()
    }
}
