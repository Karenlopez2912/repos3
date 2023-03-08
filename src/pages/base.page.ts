import { Driver, driverInstance } from "../core/Driver"

export abstract class BasePage {
    protected driver: Driver;

    constructor(){
        this.driver = driverInstance;
    }

    async navigateTo(url: string) {
        await this.driver.Page.goto(url, { waitUntil: 'networkidle' });
    }
}