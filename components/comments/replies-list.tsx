import * as React from 'react';

interface IRepliesListProps {
    replies: any;
}

const RepliesList: React.FunctionComponent<IRepliesListProps> = ({ replies }) => {
  return <>
    {
        replies.map((data: any) => {
            return (
                <div>{data.comment}</div>
            )            
        })
    }
  </>;
};

export default RepliesList;
