class PapersControllerTest < ActionDispatch::IntegrationTest
   @@content = "Test"
   @@email = "jimmymowschess@gmail.com"

   test "should get new" do
      get new_paper_url
      assert_response :success
   end

   test "should create paper" do
      assert_difference('Paper.count') do
         post papers_url, { paper: { content: @@content, email: @@email } }
      end
      assert_redirected_to new_paper_url
   end
end
