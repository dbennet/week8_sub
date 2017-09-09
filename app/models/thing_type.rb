class ThingType < ActiveRecord::Base
 	MUSEUM="museum"
 	HOTEL="hotel"
 
   belongs_to :thing, inverse_of: :thing_types
 end