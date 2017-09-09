class CreateThingTypes < ActiveRecord::Migration
   def change
     create_table :thing_types do |t|
       t.references :thing, {index: true, foreign_key: true, null:false}
       t.string :type_name, {null:false}
 
       t.timestamps null: false
     end
   end
 end