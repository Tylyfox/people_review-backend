import { Module } from "@nestjs/common";
import { GenderModule } from "src/features/gender/gender.module";
import { WeatherModule } from "src/features/weather/weather.module";
import { KnowledgeLevelModule } from "./knowledge_level/knowledge_level.module";
import { UserModule } from "./user/user.module";

@Module({
    imports: [GenderModule, WeatherModule, KnowledgeLevelModule, UserModule],
    exports: [GenderModule, WeatherModule, KnowledgeLevelModule, UserModule]
})
export class FeaturesModule {}