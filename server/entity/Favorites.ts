import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Projects } from "./Projects";
import { User } from "./User";

@Entity()
export class Favorites {

  @PrimaryGeneratedColumn('uuid')
  id : String;

  @ManyToOne(() => Projects, projects => projects.favorites, {onDelete: 'CASCADE'})
  @JoinColumn({name : "project_id"})
  project : Projects;

  @ManyToOne(() => User, user => user.favorites, {onDelete: 'CASCADE'})
  @JoinColumn({name : "user_id"})
  user : User



}