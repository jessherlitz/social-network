export default interface Post {
  created_at: string;
  asset: string | null;
  post_id: string;
  post_text: string;
  parent_post_id: string | null;
  post_user_id: string;
}