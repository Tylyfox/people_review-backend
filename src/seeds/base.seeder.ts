export abstract class BaseSeeder {
    abstract seed(): Promise<void>;
}