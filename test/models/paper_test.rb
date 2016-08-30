require 'test_helper'

class PaperTest < ActiveSupport::TestCase
   @@content = "Test"
   @@email = "jimmymowschess@gmail.com"

   test "the truth" do
      assert true
   end

   test "should not save without content and email" do
      paper = Paper.new
      assert_not paper.save
   end

   test "should successfully save" do
      paper = Paper.new(content: "Test", email: "jimmymowschess@gmail.com")
      paper.save

      assert_not paper.new_record?
   end

   test "should save content and email correctly" do
      paper = Paper.new(content: @@content, email: @@email)
      paper.save

      assert paper.content == "Test" && paper.email == "jimmymowschess@gmail.com"
   end
end
