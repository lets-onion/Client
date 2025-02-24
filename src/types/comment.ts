export type CommentType = {
  comment: string;
  fetchData: () => Promise<void>;
  showFriendsOnion: boolean;
};

export type NewCommentType = {
  setShowWriteModal: React.Dispatch<React.SetStateAction<boolean>>;
  fetchData: () => Promise<void>;
};
